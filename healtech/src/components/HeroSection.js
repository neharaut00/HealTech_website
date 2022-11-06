import React from "react";
import robo from "../assets/robo.jpg";

function HeroSection() {
  return (
    <div id="home" className="relative h-screen w-full mx-16 mb-48">
      <div className="absolute top-[90px] z-[3] left-0">
        <h1 className="main_heading font-extrabold inline font-inter text-[120px] leading-none ">
          Solution <br />
          for everything
        </h1>
        <h3 className="font-inter text-primary_font opacity-60 block my-6 text-[30px] w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <button className="btn-yellow inline-block w-fit h-fit py-6 px-10 text-[20px] my-14">
          Contact Us
        </button>
        <button className="btn-white inline w-fit h-fit py-6 px-10 text-[20px] my-14 mx-6">
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
      <div className="absolute top-[90px] z[-1] left-0 ">
        <h1 className="text-primary_font font-extrabold inline font-inter text-[120px] leading-none">
          Solution <br />
          for everything
        </h1>
      </div>
      <img
        src={robo}
        alt="robo"
        className="absolute z-[2] h-[700px] w-[700px] right-0 top-0 animate_robo"
      />

      {/* gradient start */}
      <div className="absolute z-[-2] w-[40%] h-[60%] top-20 -left-28 rounded-full animate-blob yellow__gradient animation-delay-4000" />
      <div className="absolute z-[-2] w-[60%] h-[80%] -right-28 rounded-full top-20 animate-blob blue__gradient" />
      {/* gradient end */}
    </div>
  );
}

export default HeroSection;
