export function ProgressOverview() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Learning Progress</h3>
        <div className="mt-5">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="german-basics"
                  className="text-sm font-medium text-gray-700"
                >
                  German Basics
                </label>
                <span className="text-sm font-medium text-gray-500">75%</span>
              </div>
              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "75%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="grammar"
                  className="text-sm font-medium text-gray-700"
                >
                  Grammar
                </label>
                <span className="text-sm font-medium text-gray-500">45%</span>
              </div>
              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "45%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="vocabulary"
                  className="text-sm font-medium text-gray-700"
                >
                  Vocabulary
                </label>
                <span className="text-sm font-medium text-gray-500">60%</span>
              </div>
              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
