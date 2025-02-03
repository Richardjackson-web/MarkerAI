import React from "react";
import { Outlet } from "react-router";


function Dashboard(){


    return(

        <>
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard