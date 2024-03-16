import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../utils/constants";
import Container from "../Layout/Container";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let email = {
        email: emailInputRef.current.value,
      };
      const response = await axiosInstance.post(
        "/password/forgot-passwords",
        email
      );
      e.target.reset();
      alert("A link to reset password is sent to your mail");
    } catch (err) {
      if (err.response && err.response.status === 404) {
        alert("Email you entered is incorrect. Please try again.");
      } else {
        alert("Some error occured. Please try again.");
      }
    }
  };

  const goBackToHomeHandler = () => {
    navigate("/");
  };
  return (
    <Container height="h-[95%]">
      <form
        className=" w-[90%] max-w-[428px] p-6 md:p-8 card"
        onSubmit={submitHandler}
      >
        <h1 className="headings-font text-2xl font-semibold mb-3">
          Reset your password
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
        <button
          className="block para-font rounded text-white w-full py-2 text-base button-normal mt-6 mb-4"
          type="submit"
        >
          Send reset link
        </button>
        <button
          className="block para-font rounded border-2 text-gray-500 text-base my-6 px-3 py-2 w-full button-outline"
          type="button"
          onClick={goBackToHomeHandler}
        >
          Back to login
        </button>
      </form>
    </Container>
  );
};

export default ResetPasswordForm;
