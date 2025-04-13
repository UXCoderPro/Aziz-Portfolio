import React from "react";

const Gradientbutton = ({
  title,
  icon,
  position,
  handleClick,
  otherClassess,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClassess?: string;
}) => {
  return (
    <button
      className={
        "flex cursor-pointer font-amiri justify-between items-center gap-2 h-12 overflow-hidden rounded-lg w-full px-7 focus:outline-nonemf:w-60 md:mt-10 bg-purple-gradient-200 text-sm font-medium text-white focus:ring-2 focus:ring-purple-400 hover:shadow-xl transition duration-200  ${otherClassess}"
      }
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default Gradientbutton;
