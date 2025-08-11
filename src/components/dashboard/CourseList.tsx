import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "German for Beginners",
    progress: 75,
    lastAccessed: "2 hours ago",
    image: "/images/courses/beginner.jpg",
    slug: "german-for-beginners",
  },
  {
    id: 2,
    title: "Business German",
    progress: 45,
    lastAccessed: "1 day ago",
    image: "/images/courses/business.jpg",
    slug: "business-german",
  },
  {
    id: 3,
    title: "German Conversation",
    progress: 60,
    lastAccessed: "3 days ago",
    image: "/images/courses/conversation.jpg",
    slug: "german-conversation",
  },
];

export function CourseList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
        >
          <div className="relative h-48">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              {course.title}
            </h3>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="text-sm font-medium text-gray-900">
                  {course.progress}%
                </span>
              </div>
              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${course.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-500">
                Last accessed: {course.lastAccessed}
              </span>
            </div>
            <div className="mt-6">
              <Link
                href={`/courses/${course.slug}`}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
