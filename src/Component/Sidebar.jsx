import React from "react";
import { Link } from "react-router-dom";



function Sidebar(){


    return(
        <>
        <div>
            <nav>
                <ul>
                    <li><Link to="/dashboard"><a href="">Dashboard</a></Link></li>
                    <li><Link to="/assesments"><a href="">Assesments</a></Link></li>
                    <li><Link to="/classes"><a href="">Classes</a></Link></li>
                    <li><Link to="/markingscheme"><a href="">Marking Scheme</a></Link></li>
                    <li><Link to="/analytics"><a href="">Analytics</a></Link></li>
                    <li><Link to="/settings"><a href="">Settings</a></Link></li>
                </ul>
            </nav>
        </div>
        
        
        
        </>
    )
}


export default Sidebar