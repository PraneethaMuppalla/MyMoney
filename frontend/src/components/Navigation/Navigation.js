import React, { useState } from "react";
import brand from "../../assets/brand.png";

const Navigation = () => {
  const [mobileButtonClicked, setMobileButtonClicked] = useState(false);

  const logOutHandler = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className=" bg-slate-900 h-12  px-4 md:px-16  lg:px-36 flex items-center justify-between">
        <div className=" h-10 md:h-10 bg-white px-2 rounded-md">
          {/* <h1 className=" w-auto text-white font-semibold text-2xl ">MyMoney</h1> */}
          <img src={brand} alt="My Money logo" className=" h-full  " />
        </div>
        <div className="sm:hidden text-white">
          {!mobileButtonClicked && (
            <button onClick={() => setMobileButtonClicked(true)}>
              <svg
                className="block h-12 w-9"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-line-cap="round"
                  stroke-line-join="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          )}
          {mobileButtonClicked && (
            <button onClick={() => setMobileButtonClicked(false)}>
              <svg
                className="block h-12 w-9"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-line-cap="round"
                  stroke-line-join="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="hidden sm:inline">
          <button
            className="px-4 py-1 para-font rounded text-white hover:bg-[#007c65] text-base brand-bg-color font-medium"
            onClick={logOutHandler}
          >
            Logout
          </button>
        </div>
      </nav>
      {mobileButtonClicked && (
        <div
          className="sm:hidden z-10 fixed bg-slate-900 w-full"
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 md:px-10 pb-3 pt-2">
            <a
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Team
            </a>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Projects
            </a>

            <button
              className="px-4 py-1 para-font rounded text-white hover:bg-[#007c65] text-base brand-bg-color font-medium"
              onClick={logOutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
