import React from "react";
import services from "../assets/services.svg";


function Services() {
  return (
    <div>      
      <section className="flex lg:flex-row flex-col-reverse text-center justify-center mx-5 lg:mx-20 lg:my-20 lg:py-12">    
        <div className="z-[1] md:px-12 lg:max-w-[50%] lg:pr-20">
          <p className="text-[32px] lg:text-[36px] leading-9 mb-10 mt-5 lg:mt-10 font-inter font-semibold text-gray-500" data-aos="fade-right" data-aos-once="true">
            We offer wide and insightful range of product and services
          </p>
          {/* <h2 className="font-inter font-semibold text-[48px] text-primary_font leading-tight">
            We offer wide and insightful range of product and services
          </h2> */}
          <ul className="font-inter font-semibold text-[24px] lg:text-[28px] text-primary_font " data-aos="fade-right" data-aos-once="true">
            <li className=" hover:text-red-800">SAAS Service</li>
            <li className=" hover:text-red-800">Analytics</li>
            <li className=" hover:text-red-800">Software and Customised HRM</li>
            <li className=" hover:text-red-800">Digital Clinics</li>
          </ul>
          <button className="invisible lg:visible btn-yellow w-fit h-fit py-4 px-10 text-[16px] my-14" data-aos="fade-right" data-aos-once="true">
            Contact Us
          </button>
        </div>

        <div className="flex justify-center">
          <img src={services} alt="services" className="h-[500px] w-[500px]" />
        </div>
      </section>
    </div>
  );
}

export default Services;
