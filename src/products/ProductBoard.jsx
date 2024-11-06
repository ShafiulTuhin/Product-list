import Shirt2 from "../assets/products/shirt-2.png";

const ProductBoard = () => {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Sort
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <span
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex="-1"
                      onClick="toggleDropdown()"
                      id="menu-item-0"
                    >
                      Low to High
                    </span>
                    <span
                      href=""
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex="-1"
                      onClick="toggleDropdown()"
                      id="menu-item-0"
                    >
                      High to Low
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="filter-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Filter
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="filter-button"
                  tabIndex="-1"
                  id="filter-dropdown"
                >
                  <div className="py-1" role="none">
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-1"
                      />
                      <span className="ml-2">Category 1</span>
                    </label>
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-2"
                      />
                      <span className="ml-2">Category 2</span>
                    </label>
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-3"
                      />
                      <span className="ml-2">Category 3</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
                <svg
                  className="mr-2 h-5 w-5 stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <input
                  className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                  placeholder="Find anything..."
                  aria-label="Search components"
                  id="headlessui-combobox-input-:r5n:"
                  role="combobox"
                  type="text"
                  aria-expanded="false"
                  aria-autocomplete="list"
                  value=""
                  //   style="caret-color: rgb(107, 114, 128)"
                />
              </div>

              <div className="flow-root">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                    <img
                      src={Shirt2}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
                    />
                  </div>
                  <div className="mt-4 px-3 pb-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        Green grandad Shirt
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Men's clothing
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                  </div>

                  <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                    <div className="flex px-3 py-2 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      Add To Cart
                    </div>
                  </div>
                </div>
                {/* <div className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                  <img
                    src="./assets/products/shirt-3.png"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full bg-gray-100"
                  />
                </div>
                <div className="mt-4 px-3 pb-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {" "}
                      Gray short sleeve Polo Shirt{" "}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Men's clothing
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$35</p>
                </div>

                <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                  <div className="flex px-3 py-2 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    Add To Cart
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                  <img
                    src="./assets/products/shirt-4.png"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full  bg-gray-100"
                  />
                </div>
                <div className="mt-4 px-3 pb-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {" "}
                      Orange pique dress collar polo{" "}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Men's clothing
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$35</p>
                </div>

                <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                  <div className="flex px-3 py-2 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    Add To Cart
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                  <img
                    src="./assets/products/shirt-1.png"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full  bg-gray-100"
                  />
                </div>
                <div className="mt-4 px-3 pb-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {" "}
                      Black tencel long sleeved polo{" "}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Men's clothing
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$35</p>
                </div>

                <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:ring-slate-700/20 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                  <div className="flex px-3 py-2 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    Add To Cart
                  </div>
                </div>
              </div> */}

                {/* <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                <div className="bg-gray-300 h-48 rounded-md mb-4"></div>

                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

                <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>

                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

                <div className="h-10 bg-gray-300 rounded"></div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                <div className="bg-gray-300 h-48 rounded-md mb-4"></div>

                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

                <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>

                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

                <div className="h-10 bg-gray-300 rounded"></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBoard;
