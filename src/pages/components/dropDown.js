import React from 'react'

const DropDown = ({title,data}) => {
  return (
    <div className='mx-3 my-2 px-2 dropdown p-1'>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-black font-semibold	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs px-5 py-2.5 mx-2 text-center inline-flex items-center dark:bg-gray-100"
        type="button"
      >
       {title}
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100"
      >
        <ul
          class="py-2 text-sm text-black dark:text-black"
          aria-labelledby="dropdownDefaultButton"
        >
          {
            data.map((e)=>{
              return(
                <li>
                <a
                  href="#"
                  class="block px-4 py-2   dark:hover:text-black"
                >
                  {e}
                </a>
              </li>
              )
            })
          }
          
        </ul>
      </div>
    </div>
  );
}

export default DropDown