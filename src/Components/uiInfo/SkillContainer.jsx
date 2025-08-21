import React from "react";
import Aziz from "../../assets/Skill/Aziz.svg";

const SkillContainer = ({
  bgColor = "bg-btn-black",
  bTop = "border-t-[rgba(255,255,255,0.40)]",
  width = "lg:w-16 ",
  height = "lg:h-16 ",
  icon = Aziz,
  OtherClass,
}) => {
  return (
    <div
      className={`flex ${width} w-14 h-14 ${height} ${bTop} ${bgColor}  justify-center items-center  rounded-3xl border-t-2  border-solid text-white`}
    >
      <img src={icon} alt="Sills" className={`${OtherClass}`} />
    </div>
  );
};

export default SkillContainer;
