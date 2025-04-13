import React from "react";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <div className="absolute top-0 flex h-screen w-full items-center justify-center bg-blue-gradient-200">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,rgba(50,57,103,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,57,103,0.3)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] bg-blue-gradient-200"></div>
    </div>
  );
};

export default Grid;
