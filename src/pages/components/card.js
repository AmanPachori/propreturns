import React from 'react'

const Card = () => {
  return (
    <div class="max-w-sm my-2 mx-1 bg-white  rounded-2xl shadow dark:bg-white-800 dark:border-gray-700">
      <div className="relative">
        <div class="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">For sale</button>

        </div>
        <img
          class="rounded-t-lg cardImage"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </div>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
          $ 699 678
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-black-400">
          Here are the biggest enterprise technology acquisitions of 2021
        </p>
        <button
          class="text-black font-semibold text-medium rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/material-rounded/24/FAB005/bedroom.png"
          />
          <p className="mx-1">2</p>
        </button>
        <button
          class="text-black font-semibold text-medium rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-glyphs/24/228BE6/shower-and-tub.png"
          />{" "}
          <p className="mx-1">1</p>
        </button>
        <button
          class="text-black font-semibold text-medium rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-filled/24/40C057/kentucky.png"
          />
          <p className="mx-1">60 m2</p>
        </button>
      </div>
    </div>
  );
}

export default Card