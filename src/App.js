import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import Bars from "./components/bars/Bars";
import "./App.css";
function App() {
  const width = useResponsive();
  const randArray = useSelector(state => state.configuration.randomArray);
  const wide = useSelector(state => state.configuration.arraySize);
  let randArrayDisp = randArray.map((num, index) => {
    return (
      <Bars key={index} idx={index} width={100 / wide} height={0.87 * num} />
    );
  });
  console.log(randArrayDisp);
  return (
    <div style={{ height: "100vh", width: width }} className="allContainer">
      <Navigation />
      <div className="arrayContainer">{randArrayDisp}</div>
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
