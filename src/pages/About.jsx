import React from "react";
import Testimonials from "../components/Testimonials";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TimeLine from "../components/TimeLine";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="min-h-screen p-[4rem] ">
      {/* <div className="mb-[3rem]">
        <h1 className="text-center text-5xl">Work Flow</h1>
        <div className="h-1 bg-[#D5D5D5] w-[8rem] m-auto mt-2"></div>
      </div> */}
<Title title={"Work Flow"}/>

      
      <TimeLine />
      <Title title={"Customer Reviews"}/>
      <Testimonials />
    </div>
  );
};

export default About;
