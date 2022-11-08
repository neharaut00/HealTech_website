import React from "react";
import img1 from "../assets/img1.jpg";
import services from "../assets/services.svg";
import { WhatWeOffer } from "../constants";

function Services() {
  return (
    <div>
      <section className="flex flex-row-reverse justify-evenly mx-28 py-28 my-28">
        <div className="z-[1] text-left">
          <h2 className="font-inter font-semibold text-[48px] text-primary_font">
            What we offer?
          </h2>
          <p className=" max-w-[470px] text-[22px] leading-7">
            {WhatWeOffer[0]} <br /> <br />
            {WhatWeOffer[1]}
          </p>
        </div>

        <div className="">
          <img src={img1} alt="logo" className="mt-3" />
        </div>
      </section>
      <section className="flex justify-center mx-20 py-28 my-28">
        <div className="z-[1] max-w-[50%] pr-20">
          <p className="text-[36px] leading-7 my-10 font-inter font-semibold text-gray-500">Services</p>
          <h2 className="font-inter font-semibold text-[48px] text-primary_font leading-tight">
            We offer wide and insightful range of product and services
          </h2>
          <button className="btn-yellow w-fit h-fit py-6 px-10 text-[20px] my-14">Contact Us</button>
        </div>

        <div className="">
          <img src={services} alt="services" className="h-[500px] w-[500px]" />
        </div>
      </section>
    </div>
  );
}

export default Services;
