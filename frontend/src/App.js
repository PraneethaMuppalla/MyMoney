import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Check from "./pages/Check";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Check>
            <Root />
          </Check>
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
