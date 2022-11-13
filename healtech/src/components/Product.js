import React from "react";
import logo from "../assets/stethoscope1.png";
import { product } from "../constants";

function Product() {
  return (
    <section className="flex justify-start relative mx-16 py-14 my-16 bg-primary_yellow rounded-[50px] box-shadow">
      <div>
        <div className="z-[1] pl-20">
          <h2 className="font-inter font-extrabold text-[64px] text-primary_font">
            DocER
          </h2>
          <p className=" max-w-[470px] mt-5 text-[18px] leading-7">{product}</p>
          <button className="btn-white bg-black text-white font-inter font-extrabold mt-10 py-5 px-10 text-[22px]">
            Learn More
          </button>
        </div>

        <div className="absolute rounded-[50px] right-[0%] top-[10%] sm:visible invisible bg-gradient-radial from-white via-primary_yellow to-primary_yellow">
          <img
            src={logo}
            alt="logo"
            className="h-[500px] w-[590px] -rotate-90 bg-transparent"
          />
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default Product;
