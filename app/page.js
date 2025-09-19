"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="./week-2" className="text-blue-600 underline">
        Go to Week 2
      </Link>
    </main>
  );
}
