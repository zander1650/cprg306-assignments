"use client";
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Student Information</h1>
      <p className="mb-2">Name Zander Fields</p>
      <p>
        GitHub Repository:{" "}
        <Link
          href="https://github.com/zander1650/cprg306-assignments"
          className="text-blue-600 underline"
        >
          Visit my GitHub
        </Link>
      </p>
    </div>
  );
}
