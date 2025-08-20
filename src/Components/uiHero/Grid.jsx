import { cn } from "../../lib/utils";
import React from "react";

const Grid = () => {
  return (
    <div
      className="h-screen w-full bg-blue   bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
    >
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
