import Link from "next/link";
import { UserButton } from "@/components/auth/UserButton";

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-2xl font-bold text-gray-900">
            German Board
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
