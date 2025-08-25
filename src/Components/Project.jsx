import React from "react";
import Heading from "./uiProjects/Heading";
import { projects } from "../Data/index";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./uiProjects/PinProject";
import bg from "../assets/DigitalOrdering/bg.png";
import MagicBtn from "./uiHero/MagicBtn";
import { GiChainedArrowHeads } from "react-icons/gi";
import { GiCloudDownload } from "react-icons/gi";

const Project = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbdulAziz.pdf";
    link.download = "AbdulAziz_Resume.pdf";
    link.click();
  };
  return (
    <section
      id="project"
      className="bg-blue pb-56 w-full h-auto flex justify-start items-center flex-col relative"
    >
      <Heading
        Title="My Work"
        Paragrah="Here's a showcase of my best work, combining innovative design and
            seamless development to deliver impactful digital experiences."
        content="Projects That Reflect Creativity and Functionality"
      />

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
                  <img src={bg} alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-2 "
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
                      className="border border-white/[.2] rounded-full bg-blue lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-3" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex  md:text-xs text-base text-purple font-amiri">
                    View Project
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex mt-44 flex-col md:flex-row gap-6  w-full justify-center items-center ">
        <a
          href="https://www.behance.net/abdulaziz92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicBtn
            title="View Behance Designs"
            icon={<GiChainedArrowHeads />}
            position="right"
            color="bg-btn-purple"
            shadow={true}
          />
        </a>

        <MagicBtn
          title="Get Resume"
          icon={<GiCloudDownload />}
          position="right"
          color="bg-btn-black"
          outline={true}
          handleClick={handleDownload}
        />
      </div>
    </section>
  );
};

export default Project;
