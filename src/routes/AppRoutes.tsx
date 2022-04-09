import React from "react";
import { Routes, Route } from "react-router-dom";

import { Landing, RouteError } from "features/misc";
import { SignUp, SignIn } from "features/auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<RouteError />} />
    </Routes>
  );
};

export default AppRoutes;
