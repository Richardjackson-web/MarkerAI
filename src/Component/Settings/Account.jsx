import React from "react";
import { VscEdit } from "react-icons/vsc";

function Account() {
  return (
    <>
      <div>
        <div className="relative w-full mt-10">
          <p className="font-lexend text-black-0 text-sm ml-1">Name</p>
          <input
            type="text"
            placeholder="Emee"
            className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
          />
          <VscEdit className="absolute top-10 right-2 text-grad-0" />
        </div>
        <div className="relative w-full mt-10">
          <p className="font-lexend text-black-0 text-sm ml-1">Date of birth</p>
          <input
            type="date"
            placeholder="Pick a date"
            className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
          />
          {/* <VscEdit className="absolute top-10 right-2 text-grad-0" /> */}
        </div>
        <div className="w-full mt-10">
        <p className="font-lexend text-black-0 text-sm ml-1">Language</p>
        <select
          id="language"
          value="language"
          className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
        >
          <option value="">
            Select language
          </option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
        </select>
        </div>
        <button className="bg-blue1000-0 text-white-0 text-sm px-3 py-2 mt-5 rounded-lg font-lexend">Update Account</button>
      </div>
    </>
  );
}

export default Account;
