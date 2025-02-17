import React from "react";
import { MdSort } from "react-icons/md";




function Classes(){


    return(

        <>
                            <div className="grid grid-cols-3 gap-4 px-10">
                                <div className="rounded-lg shadow-2xl shadow-grey-0">
                                    <div className="bg-lightBlue-0 py-1.5 px-40 rounded-t-xl w-full md:w-full">
            
                                    </div>
                                    <div className="py-9 text-center font-lexend text-purple400-0">
                                        <p className="text-sm">Classes</p>
                                        <p className="text-2xl">12</p>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-2xl shadow-grey-0">
                                    <div className="bg-purple300-0 py-1.5 px-40 rounded-t-xl w-full md:w-full">
            
                                    </div>
                                    <div className="py-9 text-center font-lexend text-purple400-0">
                                        <p className="text-sm">Total No. of Students</p>
                                        <p className="text-2xl">480</p>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-2xl shadow-grey-0">
                                    <div className="bg-orange-0 py-1.5 px-40 rounded-t-xl w-full md:w-full">
            
                                    </div>
                                    <div className="py-9 text-center font-lexend text-purple400-0">
                                        <p className="text-sm">Total No. of Assessments</p>
                                        <p className="text-2xl">296</p>
                                    </div>
                                </div>
                            </div>
            
                            <div className="mt-9 px-10">
                                <div className="flex font-lexend text-lg">
                                    <MdSort className="mt-1 mr-2" />
                                    <p>Filter</p>
                                </div>
                                <div className="mt-3">
                                <select className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 px-7 py-1 mr-3" name="" id="">
                                    <option value="">Student Name</option>
                                </select>
                                <select className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 px-7 py-1 mr-3" name="" id="">
                                    <option value="">Class</option>
                                </select>
                                </div>
                            </div>
            
                            <div className="mt-10 px-10">
                            <div className="font-lexend text-purple900-0">
                                    <span>All Classes</span>
                                </div>
                                    <table class="w-full text-left border-spacing-5 border-separate">
                                        <thead className="text-purple900-0 font-lexend">
                                            <tr>
                                                <th>Class</th>
                                                <th>No. of Students</th>
                                                <th>No. of Assessments</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-purple900-0 font-lexend">
                                            <tr>
                                                <td>300 level Zoology</td>
                                                <td>40</td>
                                                <td className="text-sm">20</td>
                                            </tr>
                                            <tr>
                                                <td>200 level Physics</td>
                                                <td>28</td>
                                                <td className="text-sm">16</td>
                                            </tr>
                                            <tr>
                                                <td>400 level Political Science</td>
                                                <td>32</td>
                                                <td className="text-sm">8</td>
                                            </tr>
                                            <tr>
                                                <td>100 level Computer Science</td>
                                                <td>50</td>
                                                <td className="text-sm">40</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
        
        </>
    )
}


export default Classes