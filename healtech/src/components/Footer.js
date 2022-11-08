import React from "react";
import logo from "../assets/logo.jpg";
import {socialMedia} from "../constants"

function Footer() {
  return (
    <section className="mx-28 mt-28 font-medium text-primary_font">
      <div className="flex justify-between mb-5">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="z-[1] text-right">
          <p className=" max-w-[470px] text-[18px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci etiam
            dignissim vitae, purus in auctor lacus sem ac
          </p>
          <br/>
          <p className=" max-w-[470px] text-[18px] leading-7">
            healtech@info.com
          </p>
          <br/>
          <p className=" max-w-[470px] text-[18px] leading-7">+91 1234567890</p>
          <br />
          <div className="flex justify-end flex-row md:mt-0 mt-6">
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
      <div className="flex justify-between my-2">
        <div className="">
          <p className=" max-w-[470px] text-[18px] leading-7">
            © 2022 HealTech Inc. Copyright and All rights reserved.
          </p>
        </div>
        <div className="z-[1] text-right">
          <p className=" max-w-[470px] text-[18px] leading-7">
            Terms and Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
