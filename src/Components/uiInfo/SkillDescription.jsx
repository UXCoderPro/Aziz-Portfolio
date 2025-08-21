import React from "react";
import { skillSet } from "../../Data/index";

const SkillDescription = () => {
  return (
    <div className="max-w-7xl h-auto grid lg:px-11 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  items-start mt-72">
      {skillSet.map((items, i) => (
        <div
          className="flex w-full h-auto flex-col items-start gap-2.5"
          key={i}
        >
          <div className="w-full flex gap-2.5 items-center h-12">
            <div className="flex justify-center items-center">
              <img
                src={items.icon}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-white font-amiri text-2xl font-normal leading-10">
              {items.title}
            </h1>
          </div>
          <p className="font-publicSans text-lg font-normal leading-7 text-text-light">
            {items.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillDescription;
