import React from "react";

const ToggleButton = (props) => {
  const {
    type = "button",
    className,
    onClick = () => {},
    children,
    isActive,
  } = props;

  return (
    <button
      type={type}
      className={` bg-white py-2  rounded-md border font-bold 
        ${isActive ? "button-normal text-white" : "button-outline "}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
