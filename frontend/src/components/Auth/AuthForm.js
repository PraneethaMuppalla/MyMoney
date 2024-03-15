import React, { useState } from "react";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const loginViewHandler = () => {
    setIsLoggedIn(true);
  };
  const signupViewHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="flex  justify-center items-center w-full h-[90%]">
      <form className=" w-[90%] max-w-[428px]  p-8 card bg-white">
        <h1 className="headings-font text-2xl font-semibold mb-4">
          {isLoggedIn ? "Log in" : "Create Your account"}
        </h1>
        {!isLoggedIn && (
          <div className=" mb-4">
            <label htmlFor="name" className="block para-font  text-base">
              Name
            </label>
            <input
              type="text"
              className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm shadow-sm
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}
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
          <label htmlFor="password" className="block para-font  text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm shadow-sm
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <button className="block para-font rounded text-white w-full py-2 text-base brand-bg-color mb-4">
          {!isLoggedIn ? "Log in" : "Create Account"}
        </button>
        <p
          className=" mb-2 brand-color cursor-pointer font-medium"
          onClick={isLoggedIn ? signupViewHandler : loginViewHandler}
        >
          {isLoggedIn
            ? "New to My Money? Sign up"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
