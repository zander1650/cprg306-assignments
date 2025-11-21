"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false); // track if auth is loaded

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  // Wait for user to be loaded before redirecting
  useEffect(() => {
    if (user === null) {
      // User is not logged in
      setAuthChecked(true);
    } else {
      setAuthChecked(true);
    }
  }, [user]);

  // Optional: redirect if not logged in
  useEffect(() => {
    if (authChecked && !user) {
      router.replace("/week-9"); // Redirect to landing page or login page
    }
  }, [authChecked, user, router]);

  // While checking auth state, render nothing or a loading state
  if (!authChecked) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-10 mx-20">
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-blue-600 text-white"
          >
            Logout
          </button>
          <Link href="/week-9/shopping-list">
            <br />
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-blue-600 text-white"
        >
          Login
        </button>
      )}
    </div>
  );
}
