import React from "react";
import img1 from "../assets/img1.jpg";
import { whatweoffer } from "../constants";

function WhatWeOffer() {
  return (
    <div>
      <section className="flex flex-row-reverse justify-evenly mx-28 my-16 py-12 relative">
        {/* <div className="absolute z-[-2] w-[40%] h-[60%] top-0 -left-36 rounded-full blue__gradient opacity-70" /> */}
        {/* <div className="absolute z-[-2] w-[50%] h-[80%] -right-72 top-28 rounded-full yellow__gradient opacity-70" /> */}
        <div
          className="z-[1] text-left ml-20"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <h2 className="font-inter font-semibold text-[48px] text-primary_font">
            What we offer?
          </h2>
          <p className=" max-w-[500px] text-[22px] leading-7">
            {whatweoffer[0]} <br /> <br />
            {whatweoffer[1]}
          </p>
        </div>

        <div className="" data-aos-once="true" data-aos="fade-right">
          <img src={img1} alt="logo" className="mt-3" />
        </div>
      </section>
    </div>
  );
}

export default WhatWeOffer;
