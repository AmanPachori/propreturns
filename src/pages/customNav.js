import React from "react";
import DropDown from "./components/dropDown";

const CustomNav = () => {
  const data = ['dropDown1','dropDown2','dropDown3']
  return (
    <div className="px-2 mx-2">
      <div class=" grid xl:grid-cols-6 2xl:grid-cols-8 sm:grid-cols-3 lg:grid-cols-4 gap-1  container-xl items-center justify-evenly">
        <div className="search lg:col-span-2 sm:col-span-1 ">
          <form class="mx-2 items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50  text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:placeholder-black-400 dark:text-black "
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div>
          <DropDown title="For Sale" data={data} />
        </div>
        <div>
          <DropDown title="Type House" data={data} />
        </div>
        <div>
          <DropDown title="Min Price:  $500k" data={data} />
        </div>
        <div>
          <DropDown title="Max Price:  $700k" data={data} />
        </div>
        <div>
          <DropDown title="Floor Area" data={data} />
        </div>
        <div className="px-3">
          <button
            class="text-black moreButton font-semibold	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-100		"
            type="button"
          >
            more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 px-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
