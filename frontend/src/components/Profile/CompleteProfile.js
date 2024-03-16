import React from "react";

import DEFAULT_URL from "../../assets/profile-pic.jpg";
const CompleteProfile = (props) => {
  return (
    <div className="w-full headings-font text-xl font-semibold flex items-center gap-4">
      <h1>Hello {props.name} !</h1>
      <div className=" h-10 w-10 md:h-12 md:w-12 ">
        <img
          src={props.imageUrl ? props.imageUrl : DEFAULT_URL}
          className="h-full w-full rounded-[50%] border-2  border-green-700"
          alt="Profile Pic"
        />
      </div>
    </div>
  );
};

export default CompleteProfile;
