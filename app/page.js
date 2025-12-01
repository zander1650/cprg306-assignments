"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="/week-2" >
        Go to Week 2
      </Link>
      <br />
      <Link href="/week-3" >
        Go to Week 3
      </Link>
      <br />
      <Link href="/week-4" >
        Go to Week 4
      </Link>
    <br />
      <Link href="/week-5" >
        Go to Week 5
      </Link>
      <br />
      <Link href="/week-6" >
        Go to Week 6
      </Link>
      <br />
          <Link href="/week-7" >
        Go to Week 7
      </Link>
    <br />
          <Link href="/week-8" >
        Go to Week 8
      </Link>
               <br />
          <Link href="/week-9" >
        Go to Week 9
      </Link>
               <br />

         <Link href="/week-10" >
        Go to Week 10
      </Link>
      <br />
      
    </main>
  );
}
