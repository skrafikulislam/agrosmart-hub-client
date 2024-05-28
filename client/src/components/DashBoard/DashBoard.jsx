import React from "react";

const DashBoard = () => {
  return (
    <div>
      <div class="w-full lg:ps-64">
        <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Total users
                  </p>
                  <div class="hs-tooltip">
                    <div class="hs-tooltip-toggle">
                      <svg
                        class="flex-shrink-0 size-4 text-gray-600  "
                        xmlns="http://www.w3.org/6000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      <span
                        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                        role="tooltip"
                      >
                        The number of daily users
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    72,540
                  </h3>
                  <span class="flex items-center gap-x-1 text-green-600">
                    <svg
                      class="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span class="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Sessions
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    29.4%
                  </h3>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Avg. Click Rate
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    56.8%
                  </h3>
                  <span class="flex items-center gap-x-1 text-red-600">
                    <svg
                      class="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    <span class="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Pageviews
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    92,913
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="p-4 md:p-5 min-h-[410px] flex flex-col bg-green-600  border shadow-sm rounded-xl ">
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-sm text-gray-600  ">
                    Income
                  </h2>
                  <p class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    $126,238.49
                  </p>
                </div>

                <div>
                  <span class="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-600 dark:bg-teal-600/10 dark:text-teal-600">
                    <svg
                      class="inline-block size-3.5"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    25%
                  </span>
                </div>
              </div>

              <div id="hs-multiple-bar-charts"></div>
            </div>

            <div class="p-4 md:p-5 min-h-[410px] flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-sm text-gray-600  ">
                    Visitors
                  </h2>
                  <p class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    80.3k
                  </p>
                </div>

                <div>
                  <span class="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-600 dark:bg-red-600/10 dark:text-red-600">
                    <svg
                      class="inline-block size-3.5"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    2%
                  </span>
                </div>
              </div>

              <div id="hs-single-area-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
