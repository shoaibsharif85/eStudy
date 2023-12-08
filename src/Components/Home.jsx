import React from "react";
import img from "../assets/hero.svg";
import About from "./About";
import Course from "./Course";
import Reviews from "./Reviews"
import Contact from "./Contact";


const Home = () => {

  return (
   
    <div>
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center my-20">
        <h2 className=" text-5xl   font-semibold leading-tight">
          Knowledge with
          <span className="text-green-600"> eStudy</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>

       
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" className="w-[300px] md:w-[500px]"/>
      </div>
      
    </div>
    <About/>
    <Course/>
    <Reviews/>
    <Contact/>
    </div>
  );
};

export default Home;