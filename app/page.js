"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="/week-3" >
        Go to Week 3
      </Link>
    </main>
  );
}
