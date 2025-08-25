import React from "react";
import footerGrid from "../assets/footer-grid.svg";
import MagicBtn from "./uiHero/MagicBtn";
import { IoIosMail } from "react-icons/io";
import { GiCloudDownload } from "react-icons/gi";
import SocialMedia from "./uiPortfolio/SocialMedia";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaDribbble } from "react-icons/fa6";

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbdulAziz.pdf";
    link.download = "AbdulAziz_Resume.pdf";
    link.click();
  };
  return (
    <footer className="w-full h-auto pt-20 pb-36 relative " id="contact">
      <div className="w-full z-0 absolute pointer-events-none left-0 -bottom-72 min-h-96">
        <img
          src={footerGrid}
          alt="grid"
          className="w-full  h-full opacity-50"
        />
      </div>

      <div className="flex z-10 flex-col items-center ">
        <h1 className="font-bold text-4xl md:text-5xl text-center font-publicSans text-white lg:max-w-[45vw]">
          Ready to Take <span className="text-blue-pink">your</span> digital
          presence to the next level?
        </h1>
        <p className="md:mt-10 my-5 text-center font-amiri text-base font-normal text-text-light">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex mt-9 flex-col md:flex-row gap-6 z-30  w-full justify-center items-center ">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aziaji46@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicBtn
              title="Get in Touch"
              icon={<IoIosMail />}
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
        <div className="flex max-w-7xl w-full justify-between items-center mt-10 flex-col  md:flex-row md:gap-5 ">
          <p className="md:text-base text-sm md:font-normal font-light text-white  font-amiri">
            © [2025] Abdul Aziz V I. Designed to delight, developed to perform.
          </p>
          <div className="flex justify-center items-center gap-[18px]  mt-5">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
