import React from "react";
import robo from "../assets/robo.jpg";
import { about } from "../constants"

function HeroSection() {
  return (
    <div className="relative h-[400px] xs:h-[550px] w-full mx-8 mt-10 mb-0 sm:mx-10 md:mx-24 md:mb-56 md:mt-5">
      <div id="about" className="absolute top-[0px] md:top-[50px] lg:top-[90px] z-[3] mx-8 -left-10 md:-left-20 lg:left-0 ">
        <h1 className="text-primary_font font-extrabold inline font-inter text-[60px] lg:text-[120px] sm:text-[100px] leading-none">
          Digitalising <br />
          <span className="">Healthcare</span>
        </h1>
        <h3 className="font-inter text-primary_font opacity-60 block my-2 md:my-6 text-[20px] sm:text-[30px] w-[80%] md:w-[60%]">
          { about }
        </h3>
        <button className="btn-yellow inline-block w-fit h-fit py-4 px-8 md:py-6 md:px-10 text-[16px] md:text-[20px] my-3 lg:my-14">
          Contact Us
        </button>
        <button className="btn-white inline w-fit h-fit py-4 px-8 md:py-6 md:px-10 text-[16px] md:text-[20px] my-3 lg:my-14">
          Scroll{" "}
          <svg
            className="inline"
            width="18"
            height="36"
            viewBox="0 0 18 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="15"
              height="33"
              rx="7.5"
              stroke="#011637"
              stroke-width="3"
            />
            <circle cx="9" cy="9" r="4" fill="#3C68FF" />
          </svg>
        </button>
      </div>
      <div className="absolute top-[0px] md:top-[50px] lg:top-[90px] z[-1] mx-8 -left-10 md:-left-20 lg:left-0 ">
        <h1 className="text-primary_font font-extrabold font-inter text-[60px] lg:text-[120px] sm:text-[100px] leading-none">
        Digitalising <br />
           <span className="">Healthcare</span>
        </h1>
      </div>
      <img
        src={robo}
        alt="robo"
        className="invisible md:visible absolute z-[2] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px] right-20 -top-10"
      />

      {/* gradient start */}
      <div className="absolute z-[-2] w-[40%] h-[60%] top-20 -left-28 rounded-full yellow__gradient" />
      <div className="absolute z-[-2] w-[60%] h-[80%] -right-28 rounded-full top-20 blue__gradient" />
      {/* gradient end */}
    </div>
  );
}

export default HeroSection;
