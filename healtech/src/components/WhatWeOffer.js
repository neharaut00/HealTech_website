import React from "react";
import img1 from "../assets/img1.jpg";
import { whatweoffer } from "../constants";

function WhatWeOffer() {
  return (
    <div>
      <section className="flex flex-row-reverse justify-evenly mx-6 xs:mx-8 my-14 sm:mx-28 sm:my-20 mb-5 relative" id="services">
        {/* <div className="absolute z-[-2] w-[40%] h-[60%] top-0 -left-36 rounded-full blue__gradient opacity-70" /> */}
        {/* <div className="absolute z-[-2] w-[50%] h-[80%] -right-72 top-28 rounded-full yellow__gradient opacity-70" /> */}
        <div
          className="z-[1] text-left lg:ml-20"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <h2 className="font-inter text-center lg:text-left font-semibold text-[40px] md:text-[48px] text-primary_font leading-10 xs:leading-normal">
            What we offer?
          </h2>
          <p className=" text-center lg:text-left lg:max-w-[470px] max-w-full text-[18px] md:text-[22px] leading-6 md:leading-7">
            {whatweoffer[0]} <br /> <br />
            {whatweoffer[1]}
          </p>
        </div>

        <div className="hidden lg:inline" data-aos-once="true" data-aos="fade-right">
          <img src={img1} alt="logo" className="mt-3" />
        </div>
      </section>
    </div>
  );
}

export default WhatWeOffer;
