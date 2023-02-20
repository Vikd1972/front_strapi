import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./ui/components/Profile/Profile";
import SignIn from "./ui/pages/SignIn/SignIn";
import SignUp from "./ui/pages/SignUp/SignUp";
import Blog from "./ui/pages/Blog/Blog";
import { getToken } from "./helpers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
};

export default AppRoutes;