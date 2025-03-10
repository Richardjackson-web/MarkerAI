import React from "react";
import { VscEdit } from "react-icons/vsc";
import ProfileImg from "../../assets/profile.png";

function Profile() {
  return (
    <>
      <div className="py-10">
        <div className="border-[1px] py-2 px-3 border-blue1000-0 rounded-lg">
          <img className="w-10" src={ProfileImg} alt="" />
          <div className="flex pt-3">
            <p className="font-lexend text-[15px] text-blue1000-0">
              Emediong Ebong
            </p>
            <VscEdit className="mt-1 ml-auto text-blue1000-0 text-2xl" />
          </div>
        </div>
        <div>
          <div className="relative w-full mt-10">
            <p className="font-lexend text-black-0 text-sm ml-1">Username</p>
            <input
              type="text"
              placeholder="Emee"
              className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
            />
            <VscEdit className="absolute top-10 right-2 text-grad-0" />
          </div>
          <div className="relative w-full mt-10">
            <p className="font-lexend text-black-0 text-sm ml-1">Email</p>
            <input
              type="text"
              placeholder="emyebong@gmail.com"
              className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
            />
            <VscEdit className="absolute top-10 right-2 text-grad-0" />
          </div>
          <div className="relative w-full mt-10">
            <p className="font-lexend text-black-0 text-sm ml-1">Bio</p>
            <input
              type="text"
              placeholder="Product Designer. UI/IX Instructor. I bring your ideas to lfe through captivating and user-centric designs"
              className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
            />
            <VscEdit className="absolute top-10 right-2 text-grad-0" />
          </div>
          <div className="w-full mt-10">
            <p className="font-lexend text-black-0 text-sm ml-1">URLs</p>
            <p className="font-lexend text-black-0 text-xs ml-1">
              Add links to your website, blog, protfolio, publications, social
              media profiles etc.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="https://twitter.com/emee_ebong"
                className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
              />
              <VscEdit className="absolute top-7 right-2 text-grad-0" />
            </div>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="emediongsportfolio.vzy.io"
                className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
              />
              <VscEdit className="absolute top-6 right-2 text-grad-0" />
            </div>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Add URL"
                className="w-full px-4 py-4 text-sm border-gray200-0 border-2 rounded-lg shadow-sm border-gray-300 placeholder-grad-0"
              />
              <VscEdit className="absolute top-6 right-2 text-grad-0" />
            </div>
          </div>
          <button className="bg-blue1000-0 text-white-0 text-sm px-3 py-2 mt-5 rounded-lg font-lexend">Update Profile</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
