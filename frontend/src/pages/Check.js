import React from "react";

import Navigation from "../components/Navigation/Navigation";
import AuthForm from "../components/Auth/AuthForm";
import SecondNavBar from "../components/Profile/SecondNavBar";

const Check = ({ children }) => {
  const token = localStorage.getItem("token");
  let content;
  if (token) {
    content = (
      <>
        <SecondNavBar />
        <div className="px-6 md:px-20 lg:px-40">{children}</div>
      </>
    );
  } else {
    content = <AuthForm />;
  }

  return (
    <>
      <Navigation />
      <main className="background h-[90vh] w-full ">{content}</main>
    </>
  );
};

export default Check;
