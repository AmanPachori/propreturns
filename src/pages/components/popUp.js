import React from "react";

const PopUp = () => {
  return (
    <div className="animated fadeInUp">
      <a
        href="#"
        class="flex rounded-2xl popup items-center flex-row  md:max-w-xl dark:bg-white-800 dark:border-gray-700"
      >
        <img
          class="rounded-t-lg popupImage md:rounded-none md:rounded-l-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between px-3 leading-normal">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-black-900 dark:text-black">
            $ 699 000
          </h5>
          <p class="mb-3 font-small text-xs text-gray-700 dark:text-black-400">
            8502 Preston Utica
          </p>
          <div className="flex">
            <button
              class="text-black popUpButton font-semibold rounded-lg text-sm px-1 py-1 mx-1 text-center inline-flex items-center justify-center dark:bg-gray-100"
              type="button"
            >
              <img
                className="mx-1"
                src="https://img.icons8.com/material-rounded/14/FAB005/bedroom.png"
              />
              <p className="mx-1">2</p>
            </button>
            <button
              class="text-black popUpButton font-semibold text-xs rounded-lg px-1 py-1 mx-1 text-center inline-flex items-center justify-center dark:bg-gray-100"
              type="button"
            >
              <img
                className="mx-1"
                src="https://img.icons8.com/ios-glyphs/14/228BE6/shower-and-tub.png"
              />{" "}
              <p className="mx-1">1</p>
            </button>
            <button
              class="text-black popUpButton font-semibold rounded-lg text-sm px-1 py-1 mx-1 text-center inline-flex items-center justify-center dark:bg-gray-100"
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
