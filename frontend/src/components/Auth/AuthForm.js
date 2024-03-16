import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../utils/constants";
import Container from "../Layout/Container";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const [isLoggedInView, setIsLoggedInView] = useState(true);
  const loginViewHandler = () => {
    setIsLoggedInView(true);
  };
  const signupViewHandler = () => {
    setIsLoggedInView(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (isLoggedInView) {
      try {
        const response = await axiosInstance.post("/user/login", {
          email,
          password,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      } catch (err) {
        console.error(err);
        alert("Login failed");
      } finally {
        e.target.reset();
      }
    } else {
      const confirmPassword = confirmPasswordRef.current.value;
      if (password === confirmPassword) {
        try {
          const response = await axiosInstance.post("/user/sign-up", {
            email,
            password,
          });

          console.log(response.data);
          setIsLoggedInView(true);
        } catch (err) {
          console.error(err);
          alert("Signup failed");
        } finally {
          e.target.reset();
        }
      } else {
        alert("Incorrect confirm password.");
      }
    }
  };

  const navigationHandler = () => {
    navigate("/reset-password");
  };
  return (
    <Container height="h-[95%]">
      <form
        className=" w-[90%] max-w-[428px] p-6 md:p-8 card"
        onSubmit={submitHandler}
      >
        <h1 className="headings-font text-2xl font-semibold mb-3">
          {isLoggedInView ? "Log in" : "Create Your account"}
        </h1>

        <div className=" mb-3">
          <label htmlFor="email" className="block para-font  text-base">
            Email
          </label>
          <input
            type="email"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm 
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
            ref={emailInputRef}
            required
          />
        </div>
        <div className="mb-3 para-font ">
          <label htmlFor="password" className="block para-font  text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            minLength={6}
            ref={passwordInputRef}
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm 
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
          />
          {isLoggedInView && (
            <p
              className="block text-right mt-3 brand-color para mb-0 cursor-pointer"
              onClick={navigationHandler}
            >
              Forgot your password?
            </p>
          )}
        </div>
        {!isLoggedInView && (
          <div className="mb-3">
            <label htmlFor="password" className="block para-font  text-base">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              min={6}
              ref={confirmPasswordRef}
              className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm 
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
              required
            />
          </div>
        )}
        <button
          className="block para-font rounded text-white w-full py-2 text-base brand-bg-color mt-6 mb-4"
          type="submit"
        >
          {isLoggedInView ? "Log in" : "Create Account"}
        </button>
        <p
          className=" brand-color cursor-pointer font-medium"
          onClick={isLoggedInView ? signupViewHandler : loginViewHandler}
        >
          {isLoggedInView
            ? "New to My Money? Sign up"
            : "Already have an account? Login"}
        </p>
      </form>
    </Container>
  );
};

export default AuthForm;
