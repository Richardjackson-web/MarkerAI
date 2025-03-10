import React, { useState } from "react";
import { BsPeople } from "react-icons/bs";
import { MdGrading } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import Sarah from "../assets/Sarah Johnson.png";
import Michael from "../assets/Michael Kors.png";
import Peace from "../assets/Peace Shalom.png";
import Emma from "../assets/Emma Bassey.png";

function Analytics() {
  const [value, setValue] = useState(50);

  return (
    <>
      <div className="mx-7">
        <div className="grid grid-cols-3">
          <div className="px-5 border border-blue300-0 py-5 mx-6 rounded-lg">
            <div className="flex">
              <h2 className="font-lexend text-lg text-blue1000-0">
                Total Students
              </h2>
              <BsPeople className="mt-1 ml-auto text-blue1000-0" />
            </div>
            <p className="text-blue1000-0 mt-6 font-lexend font-semibold text-2xl py-1.5">
              2,456
            </p>
          </div>
          <div className="px-5 border border-blue300-0 py-5 mx-6 rounded-lg">
            <div className="flex">
              <h2 className="font-lexend text-lg text-blue1000-0">
                Total Assessments
              </h2>
              <MdGrading className="mt-1 ml-auto text-blue1000-0" />
            </div>
            <p className="text-blue1000-0 mt-6 font-lexend font-semibold text-2xl py-1.5">
              2,456
            </p>
          </div>
          <div className="px-5 border border-blue300-0 py-5 mx-6 rounded-lg">
            <div className="flex">
              <h2 className="font-lexend text-lg text-blue1000-0">
                Average Score
              </h2>
              <GrScorecard className="mt-1 ml-auto text-blue1000-0" />
            </div>
            <p className="text-blue1000-0 mt-6 font-lexend font-semibold text-2xl py-1.5">
              78.5%
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-14 mx-7">
          <div className="basis-1/2"></div>
          <div className="basis-1/2">
            <h2 className="font-lexend text-blue1000-0 text-xl">
              Top Performing Students
            </h2>
            <div className="flex mt-4 font-lexend text-black-0">
              <div className="flex-row flex">
                <div>
                  <img src={Sarah} alt="" />
                </div>
                <div className="ml-5">
                  <p>Sarah Johnson</p>
                  <p className="text-sm">Physics</p>
                </div>
              </div>
              <div className="ml-auto">
                <p>98.5%</p>
                <p className="text-sm">Average Score</p>
              </div>
            </div>
            <div className="flex mt-4 font-lexend text-black-0">
              <div className="flex-row flex">
                <div>
                  <img src={Michael} alt="" />
                </div>
                <div className="ml-5">
                  <p>Sarah Johnson</p>
                  <p className="text-sm">Zoology</p>
                </div>
              </div>
              <div className="ml-auto">
                <p>97.2%</p>
                <p className="text-sm">Average Score</p>
              </div>
            </div>
            <div className="flex mt-4 font-lexend text-black-0">
              <div className="flex-row flex">
                <div>
                  <img src={Emma} alt="" />
                </div>
                <div className="ml-5">
                  <p>Sarah Johnson</p>
                  <p className="text-sm">Computer Science</p>
                </div>
              </div>
              <div className="ml-auto">
                <p>96.8%</p>
                <p className="text-sm">Average Score</p>
              </div>
            </div>
            <div className="flex mt-4 font-lexend text-black-0">
              <div className="flex-row flex">
                <div>
                  <img src={Peace} alt="" />
                </div>
                <div className="ml-5">
                  <p>Sarah Johnson</p>
                  <p className="text-sm">History & Intl. Studies</p>
                </div>
              </div>
              <div className="ml-auto">
                <p>96.8%</p>
                <p className="text-sm">Average Score</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 px-10">
          <h2 className="font-lexend text-grad-0 text-xl py-6">
            Areas Needing Improvement
          </h2>
          <div>
            <div className="flex">
              <p className="font-lexend text-black-0">Mathematics</p>
              <span className="ml-auto">{value}% Below Average</span>
            </div>
            <div class="relative w-full h-4 bg-gray200-0 rounded-lg overflow-hidden">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                className="input absolute top-0 left-0 w-full h-full cursor-pointer"
                onChange={(e) => setValue(e.target.value)}
              />
              <div
                class="absolute top-0 left-0 h-full bg-purple200-0 transition-all"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex mt-6">
              <p className="font-lexend text-black-0">Physics</p>
              <span className="ml-auto">{value}% Below Average</span>
            </div>
            <div class="relative w-full h-4 bg-gray200-0 rounded-lg overflow-hidden">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                className="input absolute top-0 left-0 w-full h-full cursor-pointer"
                onChange={(e) => setValue(e.target.value)}
              />
              <div
                class="absolute top-0 left-0 h-full bg-purple200-0 transition-all"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex mt-6">
              <p className="font-lexend text-black-0">Philosophy</p>
              <span className="ml-auto">{value}% Below Average</span>
            </div>
            <div class="relative w-full h-4 bg-gray200-0 rounded-lg overflow-hidden">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                className="input absolute top-0 left-0 w-full h-full cursor-pointer"
                onChange={(e) => setValue(e.target.value)}
              />
              <div
                class="absolute top-0 left-0 h-full bg-purple200-0 transition-all"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
