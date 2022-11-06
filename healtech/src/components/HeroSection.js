import React from "react";

function HeroSection() {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* gradient start */}
      <div className="absolute z-[1] w-[40%] h-[60%] top-20 -left-28 rounded-full animate-blob yellow__gradient " />
      <div className="absolute z-[1] w-[60%] h-[80%] -right-28 rounded-full top-20 animate-blob blue__gradient animation-delay-4000 " />

      {/* gradient end */}
    </div>
  );
}

export default HeroSection;
