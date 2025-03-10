import React from "react";
import { Link } from "react-router-dom";
// import Settings from ".../Pages/"
// import Navbar from "./Navbar";
// import LandingPage from "../Pages/LandingPage";
import { Outlet } from "react-router-dom"; // Outlet renders child routes

const Settings = () => {
  return (
    <div className="">
      {/* Settings Sidebar */}
      <div className="w-48 bg-gray-100 p-4">
        <nav className="">
          <ul className="flex space-x-4 font-lexend text-blue800-0 text-[17px]">
            <li className="border-blue300-0 border-[1px] rounded-lg px-2 py-1"><Link to="profile">Profile</Link></li>
            <li className="border-blue300-0 border-[1px] rounded-lg px-2 py-1"><Link to="account">Account</Link></li>
            <li className="border-blue300-0 border-[1px] rounded-lg px-2 py-1"><Link to="appearance">Appearance</Link></li>
            <li className="border-blue300-0 border-[1px] rounded-lg px-2 py-1"><Link to="notification">Notification</Link></li>
          </ul>
        </nav>
      </div>

      {/* Settings Content */}
      <div className="flex-1 px-14">
        <Outlet /> {/* Nested settings routes will render here */}
      </div>
    </div>
  );
};

export default Settings;
