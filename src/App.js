import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import Bars from "./components/bars/Bars";
import { getMergeSortAnimations } from "./algorithms/MergeSort";
import { start, stop } from "./actions/";
import "./App.css";
function App() {
  const width = useResponsive();
  const configuration = useSelector(state => state.configuration);
  const [isRunning, setIsRunning] = useState(true);
  const size = configuration.arraySize;
  const dispatch = useDispatch();
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!isRunning) {
      configuration.sortAlgorithm === "Merge Sort"
        ? mergeSort()
        : configuration.sortAlgorithm === "Bubble Sort"
        ? console.log("Bubble Sort")
        : alert("Select Algorithm");
    }
  }, [isRunning]);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(configuration.randomArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "green";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (1 / configuration.speed) * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          arrayBars[barOneIdx].textContent = newHeight;

          barOneStyle.height = `${newHeight * 0.87}vh`;
        }, i * (1 / configuration.speed) * 10);
      }
    }

    setTimeout(() => {
      setIsRunning(true);
      const arrayBars = document.getElementsByClassName("bars");
      for (let i = 0; i < size; i++) {
        arrayBars[i].style.backgroundColor = "blue";
      }
    }, size * (1 / configuration.speed) * 220);
  };
  const clickHandler = () => {
    if (configuration.sortAlgorithm !== "Select...") {
      setIsRunning(false);
    } else {
      alert("Choose an algorithm");
    }
  };
  let viewArray = configuration.randomArray.map((num, index) => {
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
  });

  return (
    <div style={{ height: "100vh", width: width }} className="allContainer">
      <Navigation isRunning={isRunning} />
      <div className="sorter">
        <div
          className="divSort"
          style={{ visibility: !isRunning && "hidden" }}
          onClick={clickHandler}
        >
          SORT!
        </div>
      </div>
      <div className="arrayContainer">{viewArray}</div>
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
