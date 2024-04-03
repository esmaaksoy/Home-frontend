import React from "react";
import Testimonials from "../components/Testimonials";
import TimeLine from "../components/TimeLine";
import Title from "../components/Title";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Home Page </title>
        <meta name="description" content="Your page description" />
      </Helmet>

      <div className="min-h-screen p-2 lg:px-[3rem] ">
        <Title title={"Work Flow"} />
        <TimeLine />
        <Title title={"Customer Reviews"} />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default About;
