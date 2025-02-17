import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import LandingPage from "../Pages/LandingPage";
import { Outlet } from "react-router-dom"; // Outlet renders child routes

const Layout = () => {
  return (
    <div>

      <div className="md:flex flex-row">
        {/* Sidebar on the left */}
        <div className="basis-[20%]">
          <Sidebar className="" />
        </div>
        {/* Main content area */}
        <div className="basis-[80%]">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
