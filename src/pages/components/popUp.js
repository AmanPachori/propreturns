import React from "react";

const PopUp = () => {
  return (
    <div className="">
      <a
        href="#"
        class="flex p-3 rounded-2xl flex-col popup items-center  border-gray-200 shadow md:flex-row md:max-w-xl dark:bg-white-800 dark:border-gray-700"
      >
        <img
          class="rounded-t-lg popupImage h-70 md:h-50 md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-5 py-7 leading-normal">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-black-900 dark:text-black">
            $ 699 678
          </h5>
          <p class="mb-3 font-small text-sm text-gray-700 dark:text-black-400">
            Here are the biggest enterprise 
          </p>
          <div className="flex">
            <button
              class="text-black font-semibold rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
              type="button"
            >
              <img
                className="mx-1"
                src="https://img.icons8.com/material-rounded/14/FAB005/bedroom.png"
              />
              <p className="mx-1">2</p>
            </button>
            <button
              class="text-black font-semibold text-xs rounded-lg px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
              type="button"
            >
              <img
                className="mx-1"
                src="https://img.icons8.com/ios-glyphs/14/228BE6/shower-and-tub.png"
              />{" "}
              <p className="mx-1">1</p>
            </button>
            <button
              class="text-black font-semibold rounded-lg text-sm px-3 py-2.5 mx-2 text-center inline-flex items-center justify-center dark:bg-gray-100"
              type="button"
            >
              <img
                className="mx-1"
                src="https://img.icons8.com/ios-filled/14/40C057/kentucky.png"
              />
              <p className="mx-1">60 </p>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PopUp;
