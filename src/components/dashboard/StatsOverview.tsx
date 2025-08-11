import {
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    name: "Total Study Time",
    value: "24h 30m",
    icon: ClockIcon,
    change: "+2h 15m",
    changeType: "increase",
  },
  {
    name: "Course Progress",
    value: "68%",
    icon: ChartBarIcon,
    change: "+5%",
    changeType: "increase",
  },
  {
    name: "Completed Lessons",
    value: "42",
    icon: AcademicCapIcon,
    change: "+3",
    changeType: "increase",
  },
];

export function StatsOverview() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Overview</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
            >
              <dt>
                <div className="absolute rounded-md bg-blue-500 p-3">
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {item.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
