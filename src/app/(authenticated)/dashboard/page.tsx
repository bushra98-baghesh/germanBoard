import { Suspense } from "react";
import { ProgressOverview } from "@/components/dashboard/ProgressOverview";
import { CourseList } from "@/components/dashboard/CourseList";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { Loader } from "@/components/ui/Loader";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Suspense fallback={<Loader />}>
          <StatsOverview />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ProgressOverview />
        </Suspense>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Courses</h2>
        <Suspense fallback={<Loader />}>
          <CourseList />
        </Suspense>
      </div>
    </div>
  );
}
