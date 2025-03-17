import React from "react";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";

function Appearance() {
  return (
    <>
      <div className="mt-5">
        <h2 className="font-lexend text-black-0 mb-3">Theme</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <img
              className="w-80 mx-auto rounded-lg hover:border-2 hover:border-black-0"
              src={Light}
              alt=""
            />
            <p className="font-lexend text-black-0 mb-3 text-center">Light</p>
          </div>
          <div className="">
            <img
              className="w-80 mx-auto rounded-lg hover:border-2 hover:border-black-0"
              src={Dark}
              alt=""
            />
            <p className="font-lexend text-black-0 mb-3 text-center">Dark</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <button className="bg-blue1000-0 text-white-0 text-sm px-3 py-2 mt-5 rounded-lg font-lexend">
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Appearance;
