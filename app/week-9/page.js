"use client";
import { useUserAuth } from  "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6 space-y-4">
      {!user && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Login with GitHub
          </button>
        </div>
      )}

      {user && (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Welcome, {user.displayName || "User"}!
          </h1>

          <button
            onClick={firebaseSignOut}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>

          <div>
            <Link
              href="/week-9/shopping-list"
              className="text-blue-700 underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
