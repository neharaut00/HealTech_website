import React from "react";
import { goal, vision, mission } from "../constants";
// import { howitworks } from "../constants";
import goalsvg from "../assets/goal.svg";
import visionsvg from "../assets/vision.svg";
import missionsvg from "../assets/mission.svg";
function HowItWorks() {
  return (
    <div className="mx-28 font-inter text-primary_font my-20 py-12">
      {/* <div className="text-center mx-[15%] w-[70%]">
        <h1 className="text-[64px] font-bold">How it works?</h1>
        <p className="text-[20px] opacity-60 mb-14">{ howitworks}</p>
      </div> */}
      <div className="flex justify-between text-center">
        <div className="flex flex-col max-w-[30%] ">
          <img src={goalsvg} alt="goal" className="mx-[30%] w-[40%]" />
          <h1 className="font-semibold text-[36px] my-5">Goal</h1>
          <p className="opacity-60 leading-6 text-[18px]">{goal}</p>
        </div>
        <div className="flex flex-col align-middle max-w-[30%] ">
          <img src={visionsvg} alt="vision" className="mx-[30%] w-[40%]" />
          <h1 className="font-semibold text-[36px] my-5">Vision</h1>
          <p className="opacity-60 leading-6 text-[18px]">{vision}</p>
        </div>
        <div className="flex flex-col align-middle max-w-[30%] ">
          <img src={missionsvg} alt="mission" className="mx-[30%] w-[40%]" />
          <h1 className="font-semibold text-[36px] my-5">Mission</h1>
          <p className="opacity-60 leading-6 text-[18px]">{mission}</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
