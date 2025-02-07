import React from "react";
import { FaFolder } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";




function NewAssesmentOverlay(){


    return(

        <>
            <div className="px-10">
                <div>
                <p className="font-lexend text-purple900-0 mb-3">New Assessments</p>
                <div className="border py-16 border-dotted rounded-lg px-16 font-lexend">
                    <div className="text-center">
                        <button><FaFolder /></button>
                        <p>Drag and drop file or browser</p>
                    </div>
                    <div className="flex bg-green-0 text-white-0 px-6 py-5 mt-4 rounded-lg">
                        <p>Physics 121 assignment.pdf</p>
                        <div className="ml-auto flex">
                            <div>
                                <span>Upload Complete</span><br />
                                <span className="text-xs">Tap to Undo</span>
                            </div>
                            <div className="mt-5">
                                <MdOutlineCancel className="text-red-0 text-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="flex">
                <p className="font-lexend text-purple900-0 my-3">Marking Scheme</p>
                                    <select className="ml-auto" name="" id="">
                                        <option value="">Select previous</option>
                                    </select>
                                </div>
                </div>
                <div className="border py-16 border-dotted rounded-lg px-16 font-lexend">
                    <div className="text-center">
                        <button><FaFolder /></button>
                        <p>Drag and drop file or browser</p>
                    </div>
                    <div className="flex bg-green-0 text-white-0 px-6 py-5 mt-4 rounded-lg">
                        <p>Marking Scheme for Physics 121 assignment.pdf</p>
                        <div className="ml-auto flex">
                            <div>
                                <span>Upload Complete</span><br />
                                <span className="text-xs">Tap to Undo</span>
                            </div>
                            <div className="mt-5">
                                <MdOutlineCancel className="text-red-0 text-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-3 text-center">
                            <button className="border px-4 py-2 rounded-lg bg-blue1000-0 text-white-0">Start marking</button>
                </div>
            </div>
            </div>
        
        </>
    )
}


export default NewAssesmentOverlay