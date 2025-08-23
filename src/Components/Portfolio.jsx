import React from "react";
import Spark from "./uiPortfolio/Spark";
import SocialMedia from "./uiPortfolio/SocialMedia";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaDribbble } from "react-icons/fa6";
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <div className="flex justify-start  items-center flex-col pb-4  bg-blue z-10 w-full h-screen">
      <Spark title="Portfolio" name="Abdul Aziz V I" />
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="font-amiri text-xl font-normal text-white  ">
          Follow Me On
        </h1>
        <div className="flex justify-center items-center gap-[18px] w-full mt-5">
          <SocialMedia
            icon={<IoLogoInstagram />}
            bgColor="bg-instagram-bg"
            link="https://www.instagram.com/ux.aji/"
          />
          <SocialMedia
            icon={<FaBehance />}
            bgColor="bg-[#3A67FA]"
            link="https://www.behance.net/abdulaziz92"
          />
          <SocialMedia
            icon={<FaLinkedinIn />}
            bgColor="bg-[#0A66C2]"
            link="https://www.linkedin.com/in/abdul-aziz-517a741a0"
          />
          <SocialMedia
            icon={<MdWhatsapp />}
            bgColor="bg-[#25D366]"
            link="https://wa.me/message/WHGDUZHDZDIBM1 "
          />
          <SocialMedia
            icon={<VscGithub />}
            bgColor="bg-[#151924]"
            link="https://github.com/UXCoderPro?tab=repositories"
          />
          <SocialMedia
            icon={<FaDribbble />}
            bgColor="bg-[#EA4C89]"
            link="https://dribbble.com/abdulazizvi"
          />
        </div>
      </motion.div>
      "
    </div>
  );
};

export default Portfolio;
