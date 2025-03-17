import React from "react";
import { MdSort } from "react-icons/md";

function Assesments() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 px-10">
        <div className="rounded-lg shadow-2xl shadow-grey-0 col-span-2 md:col-span-1 w-80 md:w-[25vw] mx-auto">
          <div className="bg-pink-0 py-1.5 rounded-t-xl w-full"></div>
          <div className="py-9 text-center font-lexend text-purple400-0">
            <p className="text-sm">Total</p>
            <p className="text-2xl">304</p>
          </div>
        </div>
        <div className="rounded-lg shadow-2xl shadow-grey-0 md:w-[25vw]">
          <div className="bg-purple100-0 py-1.5 rounded-t-xl"></div>
          <div className="py-9 text-center font-lexend text-purple400-0">
            <p className="text-sm">Graded</p>
            <p className="text-2xl">296</p>
          </div>
        </div>
        <div className="rounded-lg shadow-2xl shadow-grey-0 md:w-[25vw]">
          <div className="bg-blue1000-0 py-1.5 rounded-t-xl"></div>
          <div className="py-9 text-center font-lexend text-purple400-0">
            <p className="text-sm">Queued</p>
            <p className="text-2xl">8</p>
          </div>
        </div>
      </div>

      <div className="mt-9 px-10">
        <div className="flex font-lexend text-lg">
          <MdSort className="mt-1 mr-2" />
          <p>Filter</p>
        </div>
        <div className="mt-3 text-center grid grid-cols-2 gap-5 md:block">
          <select
            className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 py-4 mr-3 w-44 px-5"
            name=""
            id=""
          >
            <option value="">Assessment name</option>
          </select>
          <select
            className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 py-4 mr-3 w-44 px-5"
            name=""
            id=""
          >
            <option value="">Student Name</option>
          </select>
          <select
            className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 py-4 mr-3 w-44 px-5"
            name=""
            id=""
          >
            <option value="">Class</option>
          </select>
          <select
            className="ml-auto border rounded-lg border-blue1000-0 font-lexend text-blue700-0 py-4 mr-3 w-44 px-5"
            name=""
            id=""
          >
            <option value="">Marking Scheme</option>
          </select>
        </div>
      </div>

      <div className="mt-10 px-10 w-full overflow-x-auto">
        <div className="flex font-lexend text-purple900-0">
          <span>Recent Assesments</span>
          <button className="ml-auto text-xs">See all</button>
        </div>
        <table class="w-full text-left border-spacing-5 border-separate">
          <thead className="text-purple900-0 font-lexend">
            <tr>
              <th>Assesment Name</th>
              <th>No. of Students</th>
              <th>Marking Scheme</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-purple900-0 font-lexend">
            <tr>
              <td>BCH 311 Test</td>
              <td>200</td>
              <td className="text-sm">BCH 311 test.pdf</td>
              <td className="text-sm">Completed</td>
              <td className="text-sm">10/012025</td>
              <td className="text-sm">View Results</td>
            </tr>
            <tr>
              <td>Maths 101 Exams</td>
              <td>120</td>
              <td className="text-sm">Maths 101 exams.pdf</td>
              <td className="text-sm">Completed</td>
              <td className="text-sm">28/12/2024</td>
              <td className="text-sm">View Results</td>
            </tr>
            <tr>
              <td>PHY 431 Assignment</td>
              <td>320</td>
              <td className="text-sm">PHY 431 test.pdf</td>
              <td className="text-sm">Completed</td>
              <td className="text-sm">10/012025</td>
              <td className="text-sm">View Results</td>
            </tr>
            <tr>
              <td>ANM 312 Exams</td>
              <td>160</td>
              <td className="text-sm">ANM 312 exams.pdf</td>
              <td className="text-sm">Completed</td>
              <td className="text-sm">10/012025</td>
              <td className="text-sm">View Results</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Assesments;
