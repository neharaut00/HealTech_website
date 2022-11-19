import React, { useState } from "react";
import logo from "../assets/stethoscope1.png";
import { product } from "../constants";
import Modal from "./Modal.js";
import ReactCardFlip from "react-card-flip";
function Product() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div className="flex justify-center text-justify lg:justify-start relative xs:mx-5 sm:mx-16 py-10 px-5 lg:py-14 my-16 bg-primary_yellow xs:rounded-[50px] box-shadow">
        <div>
          <div className="z-[1] lg:pl-20 px-10">
            <h2 className="font-inter text-center lg:text-left font-extrabold text-[64px] text-primary_font">
              DocER
            </h2>
            <p className="z-[1] lg:max-w-[400px] xl:max-w-[450px] mt-5 text-[16px] lg:text-[18px] leading-6 lg:leading-7">
              {product}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="hidden lg:inline btn-white ml-[32%] lg:ml-0 bg-black text-white font-inter font-extrabold mt-10 py-2 px-7 text-[18px] sm:py-5 sm:px-10 sm:text-[22px]"
            >
              Learn More
            </button>
            <button
              onClick={() => setFlip(!flip)}
              className="lg:hidden btn-white ml-[28%] sm:ml-[35%] lg:ml-0 bg-black text-white font-inter font-extrabold mt-10 py-2 px-7 text-[18px] sm:py-5 sm:px-10 sm:text-[22px]"
            >
              Learn More
            </button>
          </div>

          <div className="absolute hidden lg:inline rounded-[50px] right-[0%] top-[10%] sm:visible invisible bg-gradient-radial from-white via-transparent">
            <img
              src={logo}
              alt="logo"
              className="h-[400px] w-[490px] xl:h-[500px] xl:w-[590px] -rotate-90 bg-transparent"
            />
          </div>
        </div>
        <div>
          <Modal visible={showModal} onClose={handleOnClose} />
        </div>
      </div>
      <div className="flex justify-center text-justify lg:justify-start relative xs:mx-5 sm:mx-10 py-10 px-4 lg:py-14 my-16 bg-primary_yellow xs:rounded-[50px] box-shadow">
        <div className="py-2 px-5">
          
          <div className="block sm:flex sm:flex-row sm:justify-between flex-1">
            <div className="text-[16px] sm:text-left text-center inline flex-1">
            <p className="font-inter font-extrabold text-[36px] text-primary_font leading-10">
                Features
              </p>
              <ul className="ml-4 mt-3">
                <li>- Fast Prescription generation</li>
                <li>- Digital prescription</li>
                <li>- Patient with all medical history online</li>
                <li>- Medicine alarms for patient</li>
                <li>- Doctor license alarms</li>
                <li>- Appointment Booking</li>
                <li>- Customize prescription</li>
              </ul>
            </div>
            <div className=" text-[16px] text-center sm:text-left inline flex-1">
            <p className="font-inter font-extrabold mt-5 sm:mt-0 text-[36px] text-primary_font leading-10">
                Solution
              </p>
              <ul className="ml-4 mt-3">
                <li>- Maintaining health record for patients.</li>
                <li>- Generating prescription digitally.</li>
                <li>- Patient with all medical history online</li>
                <li>
                  - Prescription generation way faster than physical prescription
                  in writing mode.
                </li>
                <li>
                  - Appointment dashboard for doctors with option of rescheduling
                  them.
                </li>
                <li>- Appointment booking for patient.</li>
                <li>- Major Alarms for Patient as well as Doctors</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setFlip(!flip)}
            className="btn-white bg-black text-white font-inter font-extrabold ml-[36%] mt-10 py-2 px-7 text-[18px] sm:py-5 sm:px-10 sm:text-[22px]"
          >
            Back
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Product;
