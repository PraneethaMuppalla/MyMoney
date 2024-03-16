import React from "react";

import Navigation from "../components/Navigation/Navigation";
import AuthForm from "../components/Auth/AuthForm";

const Check = ({ children }) => {
  const token = localStorage.getItem("token");
  let content;
  if (token) {
    content = <>{children}</>;
  } else {
    content = <AuthForm />;
  }

  return (
    <>
      <Navigation />
      <main className="background h-[90vh] w-full px-4 md:px-10">
        {content}
      </main>
    </>
  );
};

export default Check;
