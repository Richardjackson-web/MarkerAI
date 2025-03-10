import React from "react";




function FullAssesment(){




    return(

        <>
            <div className="mt-10 px-10">
                <div className="font-lexend text-purple900-0">
                        <div className="flex">
                            <p className="text-2xl">Assessment:</p>
                            <span className="text-1xl mt-1.5 ml-2"> BCH 311 Test 09/01/2025</span>
                        </div>
                        <div className="flex">
                            <p className="text-2xl">Total Score:</p>
                            <span className="text-1xl mt-1.5 ml-2"> 100</span>
                        </div>
                    </div>
                        <table class="w-full text-left border-spacing-5 border-separate">
                            <thead className="text-purple900-0 font-lexend">
                                <tr>
                                    <th>Student Name</th>
                                    <th>Class</th>
                                    <th>Score</th>
                                    <th>Grade</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-purple900-0 font-lexend">
                                <tr>
                                    <td>Jane Doe</td>
                                    <td>200 level Zoology</td>
                                    <td className="text-sm">50</td>
                                    <td className="text-sm">C</td>
                                    <td className="text-sm">Score breakdown</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>300 level Physics</td>
                                    <td className="text-sm">80</td>
                                    <td className="text-sm">A</td>
                                    <td className="text-sm">Score breakdown</td>
                                </tr>
                                <tr>
                                    <td>Regina Peter</td>
                                    <td>400 level History & International Relations</td>
                                    <td className="text-sm">30</td>
                                    <td className="text-sm">D</td>
                                    <td className="text-sm">Score breakdown</td>
                                </tr>
                                <tr>
                                    <td>Joseph Bassey</td>
                                    <td>200 level Biochemistry</td>
                                    <td className="text-sm">60</td>
                                    <td className="text-sm">B</td>
                                    <td className="text-sm">Score breakdown</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
        
        </>
    )
}

export default FullAssesment