import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/30 shadow uppercase md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-5 md:gap-0">
          <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <Link to="/" aria-label="logo" className="flex space-x-2 items-center no-underline">
              <img src="/logo.png" className="w-12" alt="tailus logo" width="144" height="133" />
              <span className="text-2xl font-bold text-green-700 dark:text-green  ">Pizzon <span className="text-yellow-700 no-underline no-underline">ReactJs</span></span>
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative w-10 h-auto p-2">
                <div id="line" className="m-auto h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"></div>
                <div id="line2" className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"></div>
              </label>
            </div>
          </div>

          <label role="button" htmlFor="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"></label>
          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-8/12">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul className="tracking-widest font-bold text-md flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                <li>
                  <Link to="/" className="block md:px-4 transition dark:text-green-700 dark:hover:text-yellow-700 hover:text-yellow-700 no-underline">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="block md:px-4 transition dark:text-yellow-700 dark:hover:text-green-700 hover:text-yellow-700 no-underline">
                    <span>Menus</span>
                  </Link>
                </li>
                <li>
                  <Link to="/table" className="block md:px-4 transition dark:text-green-700 dark:hover:text-yellow-700 hover:text-yellow-700 no-underline">
                    <span>Book Table</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="block md:px-4 transition dark:text-yellow-700 dark:hover:text-green-700 hover:text-yellow-700 no-underline">
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l dark:lg:border-gray-700">
              <button type="button" title="Start buying" className="w-full py-2 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max ml-7 mr-3">
              <Link to="/login" className="block md:px-4 transition dark:text-#ed1212 dark:hover:text-yellow-300 hover:text-yellow-700 no-underline">
                  <span className="block text-yellow-900 uppercase font-semibold text-sm">
                    Login
                  </span>
                </Link>
              </button>
              <button type="button" title="Start buying" className="w-full py-2 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                <Link to="/register" className="block md:px-4 transition dark:text-#ed1212 dark:hover:text-yellow-300 hover:text-yellow-700 no-underline">
                  <span className="block text-yellow-900 uppercase font-semibold text-sm">
                    Sign Up
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
