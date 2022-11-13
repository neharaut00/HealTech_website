import React from "react";

function Timeline() {
  return (
    <div className=" my-20 ml-40 py-12">
      <div class="p-4 mt-4">
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-12 ">
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 md:mx-auto relative">
                <div class="h-full w-8">
                  <div class="h-full bg-transparent font-inter font-bold text-[54px] text-primary_font leading-tight mb-10">
                    Our <br />
                    Timeline
                  </div>
                </div>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Registered Company</h3>
                <p class=" timeline-subheading">15th Nov 2021</p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Came up with idea DocER</h3>
                <p class=" timeline-subheading">23th Nov 2021</p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Survey on DocER</h3>
                <p class=" timeline-subheading">1st Dec 2021</p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Analysis</h3>
                <p class=" timeline-subheading">1st April 2022</p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Startup by DPIIT</h3>
                <p class=" timeline-subheading">6th May 2022</p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-12 flex items-start justify-center">
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-circle"></div>
              </div>
              <div data-aos="fade-left" class="timeline-content">
                <h3 class="timeline-heading">Development</h3>
                <p class=" timeline-subheading">20th October 2022</p>
              </div>
            </div>


            

            {/* <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                  <i class="fas fa-exclamation-circle text-gray-400"></i>
                </div>
              </div>
              <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 class="font-semibold text-lg mb-1 text-gray-400">
                  Delivered
                </h3>
                <p class="leading-tight text-justify"></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
