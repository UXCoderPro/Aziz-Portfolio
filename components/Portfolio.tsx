import React from "react";
import Socialmedia from "@/components/design/Socialmedia";
import Sparkles from "@/components/design/Sparkles";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="flex justify-center  items-center flex-col pb-4   bgg-blue-100 z-10">
      <Sparkles title="Portfolio" name="Abdul Aziz V I" />

      <div className="flex flex-col justify-center items-center gap-3.5  w-full">
        <h1 className="font-amiri text-xl font-normal text-white  ">
          Follow Me On
        </h1>
        <div className="flex justify-center items-center gap-[18px] w-full">
          <Socialmedia
            icon={
              <FaInstagram
                size={20}
                className="md:w-[28] md:h-[28]"
                color="#fff"
              />
            }
            bgColor="bg-gradient-to-tr from-pink-500 to-yellow-500"
            link="./"
          />
          <Socialmedia
            icon={
              <FaLinkedinIn
                size={20}
                className="md:w-[28] md:h-[28]"
                color="#fff"
              />
            }
            bgColor="bg-blue-700"
            link="www.linkedin.com/in/abdul-aziz-517a741a0"
          />
          <Socialmedia
            icon={
              <FaDribbble
                size={20}
                className="md:w-[28] md:h-[28]"
                color="#fff"
              />
            }
            bgColor="bg-pink-500"
            link=""
          />
          <Socialmedia
            icon={
              <FaBehance
                size={20}
                className="md:w-[28] md:h-[28]"
                color="#fff"
              />
            }
            bgColor="bg-blue-500"
            link="https://www.behance.net/abdulaziz92"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
