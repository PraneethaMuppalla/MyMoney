import React from "react";

import ResetPasswordForm from "../components/Auth/ResetPasswordForm";
import Navigation from "../components/Navigation/Navigation";

const ResetPassword = () => {
  return (
    <>
      <Navigation />
      <main className="background h-[90vh] w-full ">
        <ResetPasswordForm />
      </main>
    </>
  );
};

export default ResetPassword;
