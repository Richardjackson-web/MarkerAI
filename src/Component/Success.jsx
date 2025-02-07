import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";




function Success(){


    return(

        <>
            <div className="text-center">
                <IoCheckmarkCircle className="mx-auto text-[40px] text-green-0 mb-4" />
                <p className="font-lexend text-blue1000-0 text-lg mb-4">Success</p>
                <p className="font-lexend text-black-0 mb-4">Your assessment is being processed. Expect grading results shortly.</p>
                <button className="bg-blue1000-0 text-white-0 px-4 py-2 rounded-lg">Go To Dashboard</button>
            </div>
        
        </>
    )
}


export default Success