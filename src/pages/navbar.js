import React from 'react'

const  Navbar = () => {
  return (
    <div className=''>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-white-900 w-full top-0 left-0  ">
        <div class="container-xl flex flex-wrap items-center justify-between mx-auto px-3">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              RealEstate
            </span>
          </a>
          <div class="flex md:order-2">
            <div className='mx-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className='mx-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 dark:hover:border-b-2 border-sky-300"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 dark:hover:border-b-2 border-sky-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 dark:hover:border-b-2 border-sky-300"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 dark:hover:border-b-2 border-sky-300"
                >
                  Real Estate Agents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 dark:hover:border-b-2 border-sky-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar