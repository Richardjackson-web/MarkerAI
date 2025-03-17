import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { MdGrading } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { FaPlusCircle } from "react-icons/fa";

function Sidebar() {
  // State to manage the visibility of the icons
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <>
      <div className="relative">
        <div className=" hidden md:block pt-14 px-8 border rounded-lg border-blue300-0 md:h-screen bg-white-0">
          <div className="flex md:block font-lexend text-blue1000-0">
            <div className="pb-7">
              <Link to="/dashboard" className="flex">
                <MdOutlineDashboard className="mt-1 mr-2" /> Dashboard
              </Link>
            </div>
            <div className="pb-7">
              <Link to="/assesments" className="flex">
                <MdGrading className="mt-1 mr-2" /> Assesments
              </Link>
            </div>
            <div className="pb-7">
              <Link to="/classes" className="flex">
                <FaPeopleRoof className="mt-1 mr-2" /> Classes
              </Link>
            </div>
            <div className="pb-7">
              <Link to="/markingscheme" className="flex">
                <FaListCheck className="mt-1 mr-2" /> Marking Scheme
              </Link>
            </div>
            <div className="pb-7">
              <Link to="/analytics" className="flex">
                <IoAnalytics className="mt-1 mr-2" /> Analytics
              </Link>
            </div>
            <div className="pb-7">
              <Link to="/settings" className="flex">
                <IoSettingsOutline className="mt-1 mr-2" /> Settings
              </Link>
            </div>
            <div className="relative">
              <div className="fixed bottom-0">
                <div className="pb-7">
                  <Link to="/settings" className="flex">
                    <GoArrowRight className="mt-0.5 mr-2 text-xl" /> Sign Out
                  </Link>
                </div>
                <div className="pb-7">
                  <Link to="/settings" className="flex">
                    <BsFillQuestionCircleFill className="mt-1 mr-2" /> Help &
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed md:hidden z-50 bottom-0 py-7 px-8 w-full rounded-lg bg-white-0">
          <div className="flex flex-row font-lexend text-blue1000-0">
            <div className="basis-1/5">
              <Link to="/dashboard">
                <a className="text-center" href="">
                  <MdOutlineDashboard className="mx-auto" /> Dashboard
                </a>
              </Link>
            </div>

            <div className="basis-1/5 ml-5">
              <Link to="/classes">
                <a className="text-center" href="">
                  <FaPeopleRoof className="mx-auto" /> Classes
                </a>
              </Link>
            </div>

            <div className="basis-1/5 relative">

            {isPopupVisible && (
            <div className="absolute -top-28 -left-[100px] w-[250px] flex bg-white-0 border-2 border-gray200-0 rounded-lg px-5 py-5">
              <Link to="/analytics" className="mr-5">
                <a className="text-center" href="">
                  <IoAnalytics className="mx-auto" /> Analytics
                </a>
              </Link>
              <Link to="/markingscheme" className="">
                <a className="text-center text-sm" href="">
                  <FaListCheck className="mx-auto" /> Marking Scheme
                </a>
              </Link>
            </div>
          )}
              <FaPlusCircle onClick={togglePopup} className="text-blue1000-0 text-[50px] hover:cursor-pointer" />
            </div>

            <div className="basis-1/5">
              <Link to="/assesments">
                <a className="text-center" href="">
                  <MdGrading className="mx-auto" /> Assesments
                </a>
              </Link>
            </div>
            <div className="basis-1/5 ml-5">
              <Link to="/settings">
                <a className="text-center" href="">
                  <IoSettingsOutline className="mx-auto" /> Settings
                </a>
              </Link>
            </div>
            {/* <div className="">
              <div className="fixed bottom-0">
                <div className="">
                  <Link to="/settings">
                    <a className="flex" href="">
                      <GoArrowRight className="mt-0.5 mr-2 text-xl" /> Sign Out
                    </a>
                  </Link>
                </div>
                <div className="">
                  <Link to="/settings">
                    <a className="flex" href="">
                      <BsFillQuestionCircleFill className="mt-1 mr-2" /> Help &
                      Support
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
