import React from "react";

const Overlay = (props) => {
  return (
    <div
      className="bg-black/75 fixed top-0 left-0 w-screen h-screen z-10"
      onClick={props.onClick}
    ></div>
  );
};

export default Overlay;
