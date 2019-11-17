import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import Bars from "./components/bars/Bars";
import "./App.css";
function App() {
  const width = useResponsive();
  const configuration = useSelector(state => state.configuration);
  const size = useSelector(state => state.configuration.arraySize);

  return (
    <div style={{ height: "100vh", width: width }} className="allContainer">
      <Navigation />
      <div className="arrayContainer">
        {configuration.randomArray.map((num, index) => {
          const backgroundColor = "blue";
          return (
            <Bars
              key={index}
              idx={index}
              width={100 / size}
              height={0.87 * num}
              children={num}
              size={size}
              bgColor={backgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}
