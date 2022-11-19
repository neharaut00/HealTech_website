import React from "react";
import logo from "../assets/logo.jpg";
import { socialMedia } from "../constants";

function Footer() {
  return (
    <div className="bg-primary_font py-2 mt-28 ">
      <section className="mx-5 xs:mx-10 lg:mx-28 font-normal text-white ">
        <div className="flex sm:flex-row flex-col justify-between mb-5">
          <div
            className="flex justify-center sm:justify-start sm:h-fit
        sm:w-fit "
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="z-[1] text-center sm:text-right">
            <p className=" mt-5 sm:mt-0 sm:max-w-[470px] text-[16px] lg:text-[18px] leading-7">
              HEALTECH PRODUCT (OPC) PVT. LTD.
              <br />
              ESD Ethos, 2nd Floor Plot No 22/3,
              <br />
              Hadapsar Industrial Estate, Pune 411013
            </p>
            <br />
            <p className=" sm:max-w-[470px] text-[16px] lg:text-[18px] leading-7">
              patilgaurav345@gmail.com
            </p>
            <br />
            <p className=" sm:max-w-[470px] text-[16px] lg:text-[18px] leading-7">
              +91 1234567890
            </p>
            <br />
            <div className="flex justify-center sm:justify-end flex-row md:mt-0 mt-6">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between my-2">
          <div className="">
            <p className=" max-w-[470px] text-[12px] leading-5 text-center sm:text-left">
              © 2022 HealTech Inc. Copyright and All rights reserved.
            </p>
          </div>
          <div className="z-[1] text-center sm:text-right">
            <p className=" max-w-[470px] text-[12px] leading-5">
              Terms and Conditions | Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
