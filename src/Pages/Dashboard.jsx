import React, { useState } from "react";
import { Outlet } from "react-router";
import { FiUpload } from "react-icons/fi";
import { MdGrading } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import './Dashboard.css';


function Dashboard(){
    const [value, setValue] = useState(50);

    return(

        <>
            <div className="dashboard-content">
                {/* Make it an overflow for mobile */}
                <div className="grid grid-cols-3">
                    <div className="px-5 text-center border border-blue1000-0 py-5 mx-6 rounded-lg">
                        <div className="flex">
                            <h2 className="font-lexend">Grade New Assessments</h2>
                            <FiUpload className="mt-1 ml-auto" />
                        </div>
                        <button className="bg-blue1000-0 text-white-0 px-16 rounded-lg mt-6 font-lexend text-sm py-1.5">Upload Files</button>
                    </div>
                    <div className="px-5 text-center border border-blue1000-0 py-5 mx-6 rounded-lg">
                        <div className="flex">
                            <h2 className="font-lexend">Marking Scheme</h2>
                            <MdGrading className="mt-1 ml-auto" />
                        </div>
                        <button className="bg-blue1000-0 text-white-0 px-16 rounded-lg mt-6 font-lexend text-sm py-1.5">Create New</button>
                    </div>
                    <div className="px-5 text-center border border-blue1000-0 py-5 mx-6 rounded-lg">
                        <div className="flex">
                            <h2 className="font-lexend">Batch Upload</h2>
                            <RiStackLine className="mt-1 ml-auto" />
                        </div>
                        <button className="bg-blue1000-0 text-white-0 px-16 rounded-lg mt-6 font-lexend text-sm py-1.5">Start a new batch</button>
                    </div>
                </div>

                <div className="py-10 px-10">
                    <h2 className="font-lexend text-black-0 text-1xl py-6">Grading Progress</h2>
                    <div>
                        <div className="flex">
                            <p className="font-lexend text-black-0">Maths 101</p>
                            <span className="ml-auto">{value}%</span>
                        </div>
                        <div class="relative w-full h-4 bg-gray200-0 rounded-lg overflow-hidden">
                            <input type="range" min="0" max="100" value={value} 
                                className="input absolute top-0 left-0 w-full h-full cursor-pointer"
                                onChange={(e) => setValue(e.target.value)} />
                            <div class="absolute top-0 left-0 h-full bg-purple200-0 transition-all" style={{ width: `${value}%` }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-6">
                            <p className="font-lexend text-black-0">Physics 214</p>
                            <span className="ml-auto">{value}%</span>
                        </div>
                        <div class="relative w-full h-4 bg-gray200-0 rounded-lg overflow-hidden">
                            <input type="range" min="0" max="100" value={value} 
                                className="input absolute top-0 left-0 w-full h-full cursor-pointer"
                                onChange={(e) => setValue(e.target.value)} />
                            <div class="absolute top-0 left-0 h-full bg-purple200-0 transition-all" style={{ width: `${value}%` }}></div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="font-lexend text-blue1000-0 border rounded-lg px-5 border-blue1000-0">See all in queue</button>
                    </div>
                </div>

                <div className="px-10 pt-16">
                    <div className="flex font-lexend text-purple900-0">
                        <span>Recent Assesments</span>
                        <button className="ml-auto text-xs">See all</button>
                    </div>
                    <div>
                        <table class="w-full text-left border-spacing-5 border-separate">
                            <thead className="text-purple900-0 font-lexend">
                                <tr>
                                    <th>Assesment Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-purple900-0 font-lexend">
                                <tr>
                                    <td>BCH 311 Test</td>
                                    <td className="text-sm">30 mins ago</td>
                                    <td className="text-sm">In progress</td>
                                    <td className="text-sm">View Process</td>
                                </tr>
                                <tr>
                                    <td>Maths 101 Exams</td>
                                    <td className="text-sm">2 hrs ago</td>
                                    <td className="text-sm">Completed</td>
                                    <td className="text-sm">View Results</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard