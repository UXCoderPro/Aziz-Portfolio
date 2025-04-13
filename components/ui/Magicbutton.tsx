import React from "react";
import { cn } from "@/lib/utils";

const Magicbutton = ({
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
      className="relative inline-flex h-12 overflow-hidden rounded-lg w-full p-[1px] focus:outline-nonemf:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue-100 px-7  text-sm font-medium text-white-100 font-amiri backdrop-blur-3xl gap-2 ${otherClassess}"
        }
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default Magicbutton;
