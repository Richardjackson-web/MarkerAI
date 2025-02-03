import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import LandingPage from "../Pages/LandingPage";
import { Outlet } from "react-router-dom"; // Outlet renders child routes

const Layout = () => {
  return (
    <div>

      <div style={{ display: "flex" }}>
        {/* Sidebar on the left */}
        <Sidebar />
        {/* Main content area */}
        <main style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
