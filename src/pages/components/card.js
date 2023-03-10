import React from 'react'

const Card = ({e}) => {
  return (
    <div class=" transform transition duration-500 hover:shadow-lg hover:scale-105  max-w-sm my-2 mx-1 bg-white  rounded-2xl shadow dark:bg-white-800 dark:border-gray-700">
      <div className="relative">
        <div class="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">For sale</button>

        </div>
        <img
          class="rounded-t-lg cardImage"
          src={e.image}
          alt=""
        />
      </div>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
          $ {e.price}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-black-400">
          {e.address}
        </p>
        <button
          class="text-black font-semibold text-medium rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/material-rounded/20/FAB005/bedroom.png"
          />
          <p className="mx-1">{e.noOfBedroom}</p>
        </button>
        <button
          class="text-black font-semibold text-medium rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-glyphs/20/228BE6/shower-and-tub.png"
          />{" "}
          <p className="mx-1">{e.noOfBathroom}</p>
        </button>
        <button
          class="text-black font-semibold text-small rounded-lg text-xs px-3 py-2.5 mx-2 my-1 text-center inline-flex items-center justify-center dark:bg-gray-100"
          type="button"
        >
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-filled/20/40C057/kentucky.png"
          />
          <p className="mx-1">{e.area} m2</p>
        </button>
      </div>
    </div>
  );
}

export default Card