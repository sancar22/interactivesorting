import React from "react";
import "./Bars.css";

const Bars = ({
  idx,
  name,
  width,
  height,
  onChange,
  className,
  value,
  children,
  style,
  ref,
  ...props
}) => {
  return (
    <div
      id={idx}
      className="bars"
      style={{ width: `${width}vw`, height: `${height}vh` }}
    ></div>
  );
};

export default Bars;
