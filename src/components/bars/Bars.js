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
  size,
  ...props
}) => {
  const font = size > 80 ? 8 : size > 50 ? 10 : size > 40 ? 12 : 14;
  return (
    <div
      key={idx}
      className="bars"
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
        fontSize: `${font}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Bars;
