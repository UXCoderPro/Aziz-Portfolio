import React from "react";
import { cn } from "@/lib/utils";

const Socialmedia = ({
  icon,
  bgColor,
  link,
}: {
  icon: React.ReactNode;
  bgColor: string;
  link: string;
}) => {
  return (
    <a
      href="{link}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="social media link"
      className={cn(
        "flex w-10 h-10 justify-center items-center p-1 rounded-lg cursor-pointer transition-all duration-100 ease-in-out",
        "hover:scale-110",
        bgColor
      )}
    >
      {icon}
    </a>
  );
};

export default Socialmedia;
