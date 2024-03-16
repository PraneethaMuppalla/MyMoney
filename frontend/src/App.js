import React from "react";

import Navigation from "./components/Navigation/Navigation";
import AuthForm from "./components/Auth/AuthForm";
export default function App() {
  return (
    <>
      <Navigation />
      <main className="background h-[90vh] w-full px-4 md:px-10">
        <AuthForm />
      </main>
    </>
  );
}
