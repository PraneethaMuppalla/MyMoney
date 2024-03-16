import React from "react";

const IncompleteProfile = (props) => {
  return (
    <div className="w-full para-font text-base font-semibold align-middle text-red-400 text-right ">
      <p className="inline-block italic mx-3">Your profile is incomplete</p>
      <button
        className="para-font rounded text-white p-1 text-base brand-bg-color italic"
        onClick={props.showDetails}
      >
        Complete
      </button>
    </div>
  );
};

export default IncompleteProfile;
