import React from "react";
import NewMarkingScheme from "./NewMarkingScheme";
import NewAssessment from "./NewAssessment";
import NewAssessmentOverlay from "./NewAssessmentOverlay";



function MarkingScheme(){


    return(

        <>

            <div className="px-14">
                <NewAssessment />
                <NewAssessmentOverlay />
                <NewMarkingScheme />

            </div>
            
        </>
    )
}


export default MarkingScheme