import React from "react";

const AuthForm = () => {
  return (
    <div className="flex  justify-center items-center w-full h-[80%]">
      <form className=" w-[90%] max-w-[388px]  p-8 card">
        <h1 className="headings-font text-2xl font-semibold mb-6">
          Create Your account
        </h1>
        <div className=" mb-4">
          <label htmlFor="email" className="block para-font  text-base">
            Email
          </label>
          <input
            type="email"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm shadow-sm
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="block para-font  text-base">
            Password
          </label>
          <input
            type="password"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm shadow-sm
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <button className="block para-font rounded text-white w-full py-2 text-base brand-bg-color">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
