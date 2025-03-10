import React, { useState } from "react";

function Notification() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setIsNotificationOn(!isNotificationOn);
  };

  return (
    <>
      <div className="items-center space-x-2 mt-10">
        <span className="text-[18px] text-blue1000-0 font-lexend mb-2">Email Notifications</span>
        <div className="flex justify-between items-center border-[1px] border-grey300-0 rounded-lg px-4 py-6">
          <div>
            <p className="text-grad-0 font-lexend">Communication Emails</p>
            <p className="text-grey600-0 font-lexend text-xs">
              Receive emails about your account activity
            </p>
          </div>
          <div className="">
            <button
              onClick={handleToggle}
              className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                isNotificationOn ? "bg-blue1000-0" : "bg-blue500-0"
              }`}
            >
              {/* Toggle circle */}
              <div
                className={`absolute top-1 w-4 h-4 bg-white-0 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isNotificationOn ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-grey300-0 rounded-lg px-4 py-6 mt-7">
          <div>
            <p className="text-grad-0 font-lexend">Marketing Emails</p>
            <p className="text-grey600-0 font-lexend text-xs">
            Receive emails about new products, features ,and more.
            </p>
          </div>
          <div className="">
            <button
              onClick={handleToggle}
              className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                isNotificationOn ? "bg-blue1000-0" : "bg-blue500-0"
              }`}
            >
              {/* Toggle circle */}
              <div
                className={`absolute top-1 w-4 h-4 bg-white-0 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isNotificationOn ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-grey300-0 rounded-lg px-4 py-6 mt-7">
          <div>
            <p className="text-grad-0 font-lexend">Security Emails</p>
            <p className="text-grey600-0 font-lexend text-xs">
            Receive emails about your account activity and security.
            </p>
          </div>
          <div className="">
            <button
              onClick={handleToggle}
              className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                isNotificationOn ? "bg-blue1000-0" : "bg-blue500-0"
              }`}
            >
              {/* Toggle circle */}
              <div
                className={`absolute top-1 w-4 h-4 bg-white-0 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isNotificationOn ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <button className="bg-blue1000-0 text-white-0 text-sm px-3 py-2 ml-20 mt-5 rounded-lg font-lexend">Update</button>
      </div>
    </>
  );
}

export default Notification;
