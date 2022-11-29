import React from "react";
import { goal, vision, mission } from "../constants";
// import { howitworks } from "../constants";
import goalsvg from "../assets/goal.svg";
import visionsvg from "../assets/vision.svg";
import missionsvg from "../assets/mission.svg";
function HowItWorks() {
  return (
    <div className="bg-transparent">
      <div className="mx-6 sm:mx-28 md:mx-10 lg:mx-28 font-inter text-primary-font my-18 py-12">
        {/* <div className="text-center mx-[15%] w-[70%]">
        <h1 className="text-[64px] font-bold">How it works?</h1>
        <p className="text-[20px] opacity-60 mb-14">{ howitworks}</p>
      </div> */}
        <div className="flex flex-col md:flex-row md:justify-between text-center">
          <div className="flex items-center flex-row md:flex-col md:max-w-[30%] sm:max-w-[90%] max-w-[100%] ">
            <img src={goalsvg} alt="goal" className="w-[25%] md:mx-[30%] md:w-[40%]" />
            <div className="md:hidden ml-8">
              <h1 className=" font-semibold text-left text-[36px] md:my-2 lg:my-5">
                Goal
              </h1>
              <p className="opacity-60 text-left leading-5 md:leading-5 text-[14px] md:text-[15px] lg:text-[18px]">
                {goal}
              </p>
            </div>
            <h1 className="hidden md:block font-semibold text-[36px] md:my-2 lg:my-5">
              Goal
            </h1>
            <p className="hidden  md:block opacity-60 leading-6 md:text-[15px] lg:text-[18px]">
              {goal}
            </p>
          </div>
          <div className="flex mt-10 md:mt-0 items-center flex-row md:flex-col md:max-w-[30%] sm:max-w-[90%] max-w-[100%] ">
            <img src={visionsvg} alt="goal" className="w-[25%] md:mx-[30%] md:w-[40%]" />
            <div className="md:hidden ml-8">
              <h1 className=" font-semibold text-left text-[36px] md:my-2 lg:my-5">
                Vision
              </h1>
              <p className="opacity-60 text-left leading-5 md:leading-5 text-[14px] md:text-[15px] lg:text-[18px]">
                {vision}
              </p>
            </div>
            <h1 className="hidden md:block font-semibold text-[36px] md:my-2 lg:my-5">
              Vision
            </h1>
            <p className="hidden  md:block opacity-60 leading-6 md:text-[15px] lg:text-[18px]">
              {vision}
            </p>
          </div>
          <div className="flex mt-10 md:mt-0 items-center flex-row md:flex-col md:max-w-[30%] sm:max-w-[90%] max-w-[100%] ">
            <img src={missionsvg} alt="goal" className="w-[25%] md:mx-[30%] md:w-[40%]" />
            <div className="md:hidden ml-8">
              <h1 className=" font-semibold text-left text-[36px] md:my-2 lg:my-5">
                Misson
              </h1>
              <p className="opacity-60 text-left leading-5 md:leading-5 text-[14px] md:text-[15px] lg:text-[18px]">
                {mission}
              </p>
            </div>
            <h1 className="hidden md:block font-semibold text-[36px] md:my-2 lg:my-5">
              Mission
            </h1>
            <p className="hidden  md:block opacity-60 leading-6 md:text-[15px] lg:text-[18px]">
              {mission}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
