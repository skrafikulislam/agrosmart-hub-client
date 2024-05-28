import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[800px] m-auto mt-20">
      <div class="mt-7 bg-green-800 border border-gray-200 rounded-xl shadow-sm ">
        <div class="p-4 sm:p-7">
          <div class="mt-5">
            <form>
              <div class="grid gap-y-4">
                <div className="text-center">
                  <h1 class="block text-4xl font-bold text-gray-800 dark:text-white">
                    Login
                  </h1>
                </div>

                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">
                    Email
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      required
                      aria-describedby="email-error"
                    />
                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                      required
                      aria-describedby="confirm-password-error"
                    />
                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p class="mt-2 text-sm text-white">
                    Don't have an account?
                    <Link
                      to="/signup"
                      class="text-gray-300 decoration-2 hover:underline font-medium "
                      href="../examples/html/signin.html"
                    >
                      SignUp here
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
