import React from "react";
import { FaFolder } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

function NewAssessment() {
  return (
    <>
      <div className="px-10">
        <div>
          <p className="font-lexend text-purple900-0 mb-3">New Assessments</p>
          <div className="border py-16 border-dotted rounded-lg px-16 font-lexend w-full">
            <div className="text-center">
              <button>
                <FaFolder />
              </button>
              <p>Drag and drop file or browser</p>
            </div>
            <div className="md:flex bg-green-0 text-white-0 px-6 py-10 mt-4 rounded-lg w-full">
              <p className="text-sm">Physics 121 assignment.pdf</p>
              <br className="block md:hidden"/>
              <div className="ml-auto flex">
                <div className="text-[10px]">
                  <span>Upload Complete</span>
                  <br className="hidden md:block"/>
                  <span className="text-xs hidden md:block">Tap to Undo</span>
                </div>
                <div className="mt-5">
                  <MdOutlineCancel className="text-red-0 text-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex mb-3">
              <p className="font-lexend text-purple900-0">
                New Assessments
              </p>
              <select className="ml-auto" name="" id="">
                <option value="">Select previous</option>
              </select>
            </div>
            <div className="border py-16 border-dotted rounded-lg px-16 font-lexend">
              <div className="text-center">
                <button>
                  <FaFolder />
                </button>
                <p>Drag and drop file or</p>
              </div>
              <div className="md:px-6 py-3 text-center">
                <button className="border text-sm rounded-lg border-purple400-0 w-full">
                  Upload new marking scheme
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 text-center">
            <button className="border px-4 py-2 rounded-lg bg-blue1000-0 text-white-0">
              Start marking
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAssessment;
