import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import Bars from "./components/bars/Bars";
import { getMergeSortAnimations } from "./algorithms/MergeSort";
import { getBubbleSortAnimations } from "./algorithms/BubbleSort";
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
        ? bubbleSort()
        : alert("Select Algorithm");
    }
  }, [isRunning]);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(configuration.randomArray);
    console.log(animations);
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
    timer();
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations([3, 1, 4, 2]);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      if (typeof animations[i + 1] !== "undefined") {
        const swap =
          animations[i][0] !== animations[i + 1][0] &&
          animations[i][1] !== animations[i + 1][1]
            ? true
            : false;
        if (!swap) {
          const [barOneIdx, barTwoIdx] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.backgroundColor = "red";
          barTwoStyle.backgroundColor = "red";
          setTimeout(() => {
            barOneStyle.backgroundColor = "blue";
            barTwoStyle.backgroundColor = "blue";
          }, i * 10);
        } else {
          setTimeout(() => {
            const [barOneIdx, barTwoIdx] = animations[i];
            const newHeightOne = arrayBars[barTwoIdx].style.height;
            arrayBars[barOneIdx].style.height = `${newHeightOne * 0.87}vh`;
            console.log(arrayBars, "2");
            arrayBars[barOneIdx].style.backgroundColor = "green";
          }, i * 10);
        }
      } else {
        console.log("Passed here");
      }
    }

    timer();
  };

  const timer = () =>
    setTimeout(() => {
      setIsRunning(true);
      const arrayBars = document.getElementsByClassName("bars");
      for (let i = 0; i < size; i++) {
        arrayBars[i].style.backgroundColor = "blue";
      }
    }, size * (1 / configuration.speed) * 10000); //220

  const clickHandler = () => {
    if (configuration.sortAlgorithm !== "Select...") {
      setIsRunning(false);
    } else {
      alert("Choose an algorithm");
    }
  };

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
