import React from 'react'
import img1 from "../assets/img1.jpg"
import { Whoweare } from '../constants';

function WhoWeAre() {
  return (
    <section className="flex justify-evenly mx-28 py-28 my-28">
      <div className="z-[1] mr-20">
        <h2 className="font-inter font-semibold text-[48px] text-primary_font">Who we are?</h2>
        <p className=" max-w-[470px] text-[22px] leading-7">
          { Whoweare }
        </p>
      </div>

      <div className="">
        <img src={img1} alt="logo" className="mt-3" />
      </div>
    </section>
  )
}

export default WhoWeAre