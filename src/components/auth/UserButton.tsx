"use client";

import { useRouter } from "next/navigation";

export function UserButton() {
  const router = useRouter();

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center max-w-xs rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => router.push("/settings")}
      >
        <span className="sr-only">Open user menu</span>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-600 font-medium">U</span>
        </div>
      </button>
    </div>
  );
}
