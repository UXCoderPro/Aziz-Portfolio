import b1 from "../assets/b1.svg";
import grid from "../assets/grid.svg";
import b4 from "../assets/b4.svg";

import Ai from "../assets/Skill/AI.svg";
import Bal from "../assets/Skill/Bal.svg";
import Boots from "../assets/Skill/Boots.svg";
import Css from "../assets/Skill/Css.svg";
import Figma from "../assets/Skill/Figma.svg";
import Framer from "../assets/Skill/Framer.svg";
import Git from "../assets/Skill/Git.svg";
import Html from "../assets/Skill/Html.svg";
import Js from "../assets/Skill/Js.svg";
import love from "../assets/Skill/love.svg";
import Ps from "../assets/Skill/PS.svg";
import React from "../assets/Skill/React.svg";
import Tail from "../assets/Skill/Tail.svg";
import Web from "../assets/Skill/Web.svg";
import Wix from "../assets/Skill/Wix.svg";
import Xd from "../assets/Skill/Xd.svg";

import AS from "../assets/Description/AS.svg";
import Detail from "../assets/Description/Detail.svg";
import DS from "../assets/Description/DS.svg";
import Micro from "../assets/Description/Micro.svg";
import Proto from "../assets/Description/Proto.svg";
import Test from "../assets/Description/Test.svg";
import UI from "../assets/Description/UI.svg";
import UX from "../assets/Description/UX.svg";
import Visual from "../assets/Description/Visual.svg";

import QR from "../assets/DigitalOrdering/QR.svg";
import HRMS from "../assets/DigitalOrdering/HRMS.svg";
import POS from "../assets/DigitalOrdering/POS.svg";
import kiosk from "../assets/DigitalOrdering/kiosk.svg";
import KDS from "../assets/DigitalOrdering/KDS.svg";
import COS from "../assets/DigitalOrdering/COS.svg";
import MAD from "../assets/DigitalOrdering/MAD.svg";

export const gridItems = [
  {
    id: 1,
    title:
      "I turn client ideas into intuitive designs and dynamic React.js apps through open collaboration. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My skill stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tech-driven designer with a passion for crafting seamless digital experiences.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: grid,
    spareImg: b4,
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const skills = [
  {
    id: 1,
    icon: Ai,
  },
  {
    id: 2,
    icon: Bal,
  },
  {
    id: 3,
    icon: Boots,
  },
  {
    id: 4,
    icon: Css,
  },
  {
    id: 5,
    icon: Figma,
  },
  {
    id: 6,
    icon: Framer,
  },
  {
    id: 7,
    icon: Git,
  },
  {
    id: 8,
    icon: Html,
  },
  {
    id: 9,
    icon: Js,
  },
  {
    id: 10,
    icon: love,
  },
  {
    id: 11,
    icon: Ps,
  },
  {
    id: 12,
    icon: React,
  },
  {
    id: 13,
    icon: Tail,
  },
  {
    id: 14,
    icon: Web,
  },
  {
    id: 15,
    icon: Wix,
  },
  {
    id: 16,
    icon: Xd,
  },
];

export const skillSet = [
  {
    id: 1,
    title: "User Interface Design",
    description:
      "Crafting clean and visually appealing interfaces for web applications.",
    icon: UI,
  },
  {
    id: 2,
    title: "User Experience Design",
    description:
      "Designing intuitive workflows to enhance usability and user satisfaction.",
    icon: UX,
  },
  {
    id: 3,
    title: "Wireframe & Prototyping",
    description:
      "Creating wireframes and interactive prototypes using tools like Figma, Adobe XD, or Sketch.",
    icon: Proto,
  },
  {
    id: 4,
    title: "Visual Design",
    description:
      "Applying typography, color theory, and layout principles to create professional designs.",
    icon: Visual,
  },
  {
    id: 5,
    title: "Usability Testing",
    description:
      "Conducting tests to validate designs and ensure optimal user experiences.",
    icon: Test,
  },
  {
    id: 6,
    title: "Design System",
    description:
      "Building reusable components for consistent and scalable design solutions.",
    icon: DS,
  },
  {
    id: 7,
    title: "Accessibility Standards",
    description:
      "Designing inclusive websites that meet accessibility guidelines.",
    icon: AS,
  },
  {
    id: 8,
    title: "Micro Interaction",
    description:
      "Creating intuitive animations and interactions to enhance user experience, guide behavior, and provide feedback",
    icon: Micro,
  },
  {
    id: 9,
    title: "Attention to Detail",
    description:
      "Ensuring precision and consistency in design and development to deliver high-quality, polished outcomes.",
    icon: Detail,
  },
];

export const projects = [
  {
    id: 1,
    title: "QR - Ordering System",
    des: "A user-friendly digital ordering system for restaurants and cafes, simplifying orders, enhancing satisfaction, and improving efficiency with a mobile-friendly design.",
    img: QR,
    iconLists: [Figma, Bal, Tail, React, love, Ai, Ps],
    link: "https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=292-2&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=292%3A2&show-proto-sidebar=1",
  },
  {
    id: 2,
    title: "Human Resource Management System",
    des: "HRMS is a digital solution that streamlines workforce management by automating recruitment, onboarding, payroll, performance tracking, and compliance, reducing manual tasks and errors while improving communication.",
    img: HRMS,
    iconLists: [Figma, Bal, React, Tail, love],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=313-586&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=313%3A586&show-proto-sidebar=1",
  },
  {
    id: 3,
    title: "Point of Sale System",
    des: "A modern POS system designed to reduce wait times and streamline operations in restaurants, retail, and hospitality. It offers fast processing, detailed reports, and an intuitive interface to enhance efficiency and customer satisfaction.",
    img: POS,
    iconLists: [Figma, Bal, love, Ai, Ps],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=307-513&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=307%3A513&show-proto-sidebar=1",
  },
  {
    id: 4,
    title: "Kiosk Ordering",
    des: "A self-service system for quick-service restaurants, cafes, and retail, streamlining orders, reducing wait times, and ensuring an intuitive, accessible experience for all users.",
    img: kiosk,
    iconLists: [Figma, Bal, love, Ai, Ps],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=298-2&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=298%3A2&show-proto-sidebar=1",
  },
  {
    id: 5,
    title: "Kitchen Display System",
    des: "This project involved designing an intuitive and efficient UI for a Kitchen Display System (KDS) to streamline order management in fast-paced kitchen environments. The solution aimed to replace traditional ticketing systems with a digital interface, improving order accuracy, reducing preparation times, and enhancing overall operational efficiency..",
    img: KDS,
    iconLists: [Figma, Bal, love, Ai, Ps],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=298-2&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=298%3A2&show-proto-sidebar=1",
  },
  {
    id: 6,
    title: "Customer Ordering System",
    des: "A table-based app that lets guests order food directly from their table and send it to the kitchen instantly. It also includes CRM features like membership login, discounts, and loyalty points, enhancing both customer convenience and restaurant engagement.",
    img: COS,
    iconLists: [Figma, Bal, love, Ai, Ps],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=298-2&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=298%3A2&show-proto-sidebar=1",
  },
  {
    id: 7,
    title: "Merchant Payment Application",
    des: "A mobile app that tracks and displays all customer payments received by a shop in real time, similar to a soundbox payment system. It provides merchants with a clear view of daily transactions, payment methods, and transfer amounts, ensuring transparency and quick access to sales records.",
    img: MAD,
    iconLists: [Figma, Bal, love, Ai, Ps],
    link: "/https://www.figma.com/proto/COQynRKZwAJwfkjRkrM9Ml/Point-of-sale?page-id=219%3A46630&node-id=298-2&viewport=725%2C225%2C0.2&t=uNmICz3UBHRvD5vm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=298%3A2&show-proto-sidebar=1",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Working with Abdul Aziz was a smooth and impactful experience. As our UI/UX Designer, Aji took the time to deeply understand our users pain points and business goals for our Turtle Adoption application. He translated complex requirements into a simple, engaging, and user-friendly design. His ability to combine research insights with creative design solutions helped us deliver an application that truly connects with users.",
    name: "Jehan Raj",
    title: "Director of Futeky Technologies",
  },
  {
    id: 2,
    quote:
      "Abdul Aziz played a key role in shaping the user experience for our Gym Slot Booking application. He carefully researched user pain points and turned them into practical design solutions that made our app intuitive and easy to use. His attention to detail, structured design process, and focus on solving real problems helped us achieve a smooth and efficient booking flow. We truly value his creativity and dedication to delivering a user-friendly product.",
    name: "Anto Joel",
    title: "Director of Zenanvibe",
  },
  {
    id: 3,
    quote:
      "Abdul Aziz was instrumental in the design and development of our product ecosystem, which included a Point of Sale system, kiosk ordering, kitchen display, HR management, QR ordering, merchant payment, and customer ordering solutions. Acting both as a Product Designer and Product Owner, he not only crafted user-friendly, scalable designs but also guided the product vision with clarity and strategy. His ability to balance user needs with business goals resulted in seamless experiences across multiple platforms. Abdul Aziz professionalism, leadership, and design thinking added immense value to our projects.",
    name: "Dominic Tay",
    title: "Director of Warely Technologies",
  },
  {
    id: 4,
    quote:
      "Abdul Aziz designed a modern, elegant, and functional website for Midas Apparel that perfectly reflects our brand identity. His creative approach and eye for detail gave us a professional online presence that stands out in the fashion industry. We appreciated his ability to combine aesthetics with usability, delivering a sleek website that resonates with our customers.",
    name: "Yasar Arafath",
    title: "Director of Midas Apparel",
  },
];
