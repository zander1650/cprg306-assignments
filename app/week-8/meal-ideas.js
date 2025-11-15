"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient)
{
    if(!ingredient) return [];

    try
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error){
        console.error(error);
    }
}

export default function MealIdeas({ingredient})
{
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas()
    {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="p-4 border rounded-lg shadow bg-white w-full">
      <h2 className="text-xl font-bold mb-2">
        Meal Ideas {ingredient ? `for ${ingredient}` : ""}
      </h2>

      {!ingredient && <p>Select an item to see meal ideas.</p>}

      {ingredient && meals.length === 0 && (
        <p>No meal ideas found for {ingredient}.</p>
      )}


      <ul className="list-disc pl-6 space-y-1">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-2 hover:bg-gray-300">
            <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} className="flex items-center space-x-2">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-14 h-14"
            ></img>
            <span className="text-blue-500 hover:underline">{meal.strMeal}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}