import React from "react";

const Profile = ({ src, alt }) => {
  return (
    <div className="relative lg:w-50 lg:h-50 w-[140px] h-[140px] md:w-[180px] md:h-[180px] sm:h-[160px] sm:w-[160px] rounded-full overflow-hidden  bg-blue-gradient border border-[rgba(177,184,232,0.16)] ">
      <img
        src={src}
        alt={alt}
        width={190}
        height={190}
        className="object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default Profile;
