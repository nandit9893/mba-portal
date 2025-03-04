import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-black text-white text-center py-16"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
        opacity: "75%",
      }}
    >
      <h1 className="text-4xl font-bold">Jobs</h1>
    </div>
  );
};

export default Hero;
