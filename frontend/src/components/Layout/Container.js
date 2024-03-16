import React from "react";

const Container = (props) => {
  return (
    <div
      className={`flex  justify-center items-center w-full ${props.height} `}
    >
      {props.children}
    </div>
  );
};

export default Container;
