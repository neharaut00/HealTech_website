import React from 'react'
import img1 from "../assets/img1.jpg"
import { Whoweare } from '../constants';

function WhoWeAre() {
  return (
    <section className="flex justify-evenly mx-6 xs:mx-8 my-14 sm:mx-28 sm:my-20 py-12 relative">
      {/* <div className="absolute z-[-2] w-[60%] h-[80%] -top-8 -left-96 rounded-full yellow__gradient opacity-70" /> */}
        {/* <div className="absolute z-[-2] w-[40%] h-[60%] -right-36 top-44 rounded-full blue__gradient opacity-70" /> */}
      <div className="z-[1] lg:mr-20" data-aos="fade-right" data-aos-once="true">
        <h2 className="text-center lg:text-left font-inter font-semibold text-[40px] md:text-[48px] text-primary_font">Who we are?</h2>
        <p className=" text-center lg:text-left lg:max-w-[470px] max-w-full text-[18px] md:text-[22px] leading-6 md:leading-7">
          { Whoweare }
        </p>
      </div>

      <div className="hidden lg:inline" data-aos="fade-left" data-aos-once="true">
        <img src={img1} alt="logo" className="mt-3" />
      </div>
    </section>
  )
}

export default WhoWeAre