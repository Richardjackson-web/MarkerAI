import React from "react";
import { FaFolder } from "react-icons/fa";





function NewMarkingScheme(){


    return(


        <>
            <div className="mt-6">
                                <div className="flex">
                                    <p className="font-lexend text-purple900-0 mb-3">Upload Your Marking Scheme</p>
                                    <select className="ml-auto" name="" id="">
                                        <option value="">Select previous</option>
                                    </select>
                                </div>
                                <div className="border py-16 border-dotted rounded-lg px-16 font-lexend">
                                    <div className="text-center">
                                        <button><FaFolder /></button>
                                        <p>Drag and drop file or</p>
                                    </div>
                                    <div className="px-6 py-3 text-center">
                                        <button className="border px-3 rounded-lg border-purple400-0">Upload new marking scheme</button>
                                    </div>
                                </div>
                            </div>
        
        
        </>
    )
}

export default NewMarkingScheme