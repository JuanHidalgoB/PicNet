import { useState } from "react";
/* import "../App.css"; */
export const Post = () => {
  return (
    <div className="space-y-4 shadow-xl rounded-xl p-3">
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://robohash.org/ ?set=set2"
          alt=""
        />
        <div className="font-medium text-black">
          <div>user_name</div>
        </div>
      </div>
      <figure className="min-w-full h-auto">
        <img
          className="rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
      </figure>
      <div>
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Like
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Share
        </button>
        <p className="mb-3 font-normal text-gray-900 ">
          <span className="font-medium text-black">user_name</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="/home">
          {" "}
          <p className="mb-3 text-gray-400 font-semibold">
            Comments...
          </p>
        </a>
      </div>
    </div>
  );
};
