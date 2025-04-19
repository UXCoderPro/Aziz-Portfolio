"use client";
import React from "react";
import { projects } from "@/Data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20 bgg-blue-100">
      <div className="flex flex-col mt-14 items-center lg:gap-10 sm:gap-6">
        <h1 className="self-stretch text-white text-center font-amiri lg:text-4xl sm:text-3xl font-normal leading-[46px]">
          My Work
        </h1>
        <div className="flex-col flex items-start gap-4 w-full self-stretch">
          <p className="self-stretch text-white-200 text-center font-publicsans lg:text-lg sm:text-base font-medium leading-6">
            Here’s a showcase of my best work, combining innovative design and
            seamless development to deliver impactful digital experiences.
          </p>
          <h2 className="self-stretch text-white text-center font-amiri lg:text-3xl sm:text-2xl font-bold leading-[44px]">
            Projects That Reflect Creativity and Functionality
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center p-4 gap-16  lg:mt-50 md:mt-32 sm:mt-24 max-w-7xl">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              className="text-white  lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={id}
            >
              <PinContainer title="View" href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold font-amiri lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-base text-white-200 font-publicsans lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bgg-blue-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex  md:text-xs text-sm text-purple font-amiri">
                      View Case Study
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
