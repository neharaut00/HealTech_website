import React from "react";
// import { product} from '../constants'

function Modal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[5] bg-black bg-opacity-10 backdrop-blur-lg flex justify-center items-center ">
      <div className="bg-white rounded-[50px] box-shadow py-10 px-14 mx-0 xl:mx-14">
        <div className="flex flex-row justify-between flex-1">
          <div className=" text-[18px] inline flex-1">
            <p className="font-inter font-extrabold text-[48px] text-primary_font leading-10">
              Features
            </p>
          </div>
          <div className=" text-[18px] inline flex-1">
            <p className="font-inter text-left font-extrabold text-[48px] text-primary_font leading-10">
              Problem being Solved:
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between flex-1">
          <div className="text-[18px] inline flex-1">
            <ul className="list-disc ml-4 mt-3">
              <li>Fast Prescription generation</li>
              <li>Digital prescription</li>
              <li>Patient with all medical history online</li>
              <li>Medicine alarms for patient</li>
              <li>Doctor license alarms</li>
              <li>Appointment Booking</li>
              <li>Customize prescription</li>
            </ul>
          </div>
          <div className=" text-[18px] inline flex-1">
            <ul className="list-disc ml-4 mt-3">
              <li>Maintaining health record for patients.</li>
              <li>Generating prescription digitally.</li>
              <li>Patient with all medical history online</li>
              <li>
                Prescription generation way faster than physical prescription in
                writing mode.
              </li>
              <li>
                Appointment dashboard for doctors with option of rescheduling
                them.
              </li>
              <li>Appointment booking for patient.</li>
              <li>Major Alarms for Patient as well as Doctors</li>
            </ul>
          </div>
        </div>
        <button
          onClick={onClose}
          className="btn-white bg-black text-white font-inter font-extrabold mt-10 py-2 px-7 text-[18px] sm:py-5 sm:px-10 sm:text-[22px]"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Modal;
