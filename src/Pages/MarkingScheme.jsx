import React from "react";
import NewMarkingScheme from "./NewMarkingScheme";
import NewAssessment from "./NewAssessment";
import NewAssessmentOverlay from "./NewAssessmentOverlay";
import FullAssessment from "../Component/FullAssessment";



function MarkingScheme(){


    return(

        <>

            <div className="px-14">
                <NewAssessment />
                <NewAssessmentOverlay />
                <NewMarkingScheme />
                <FullAssessment />

            </div>
            
        </>
    )
}


export default MarkingScheme