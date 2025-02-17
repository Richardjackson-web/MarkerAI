import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { MdGrading } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";



function Sidebar(){


    return(
        <>
        <div className="md:px-[15%] pt-14 border rounded-lg border-blue300-0 md:h-screen bg-white-0">
                <div className="flex md:block font-lexend text-blue1000-0">
                    <div className="pb-7">
                        <Link to="/dashboard"><a className="flex" href=""><MdOutlineDashboard className="mt-1 mr-2" /> Dashboard</a></Link>
                    </div>
                    <div className="pb-7">
                        <Link to="/assesments"><a className="flex" href=""><MdGrading className="mt-1 mr-2" /> Assesments</a></Link>
                    </div>
                    <div className="pb-7">
                        <Link to="/classes"><a className="flex" href=""><FaPeopleRoof className="mt-1 mr-2" /> Classes</a></Link>
                    </div>
                    <div className="pb-7">
                        <Link to="/markingscheme"><a className="flex" href=""><FaListCheck className="mt-1 mr-2" /> Marking Scheme</a></Link>
                    </div>
                    <div className="pb-7">
                        <Link to="/analytics"><a className="flex" href=""><IoAnalytics className="mt-1 mr-2" /> Analytics</a></Link>
                    </div>
                    <div className="pb-7">
                        <Link to="/settings"><a className="flex" href=""><IoSettingsOutline className="mt-1 mr-2" /> Settings</a></Link>
                    </div>
                </div>
        </div>
        
        
        
        </>
    )
}


export default Sidebar