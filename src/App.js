import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import Bars from "./components/bars/Bars";
import { getMergeSortAnimations } from "./algorithms/MergeSort";
import { getBubbleSortAnimations } from "./algorithms/BubbleSort";

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
        const animations = getBubbleSortAnimations(configuration.randomArray);
        for (let i = 1; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("bars");
            const [barOneIdx, barTwoIdx, swap] = animations[i];
            const [prevBarOneIdx, prevBarTwoIdx] = animations[i - 1];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const prevOneStyle = arrayBars[prevBarOneIdx].style;
            const prevTwoStyle = arrayBars[prevBarTwoIdx].style;

            const color =
                barOneIdx === prevBarOneIdx && barTwoIdx === prevBarTwoIdx
                    ? "red"
                    : "green";

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                prevOneStyle.backgroundColor = color;
                prevTwoStyle.backgroundColor = color;
            }, i * 10);

            //const [barOneIdx, barTwoIdx] = animations[i];
            if (swap) {
                setTimeout(() => {
                    const newHeightOne = barTwoStyle.height;
                    const newHeightTwo = barOneStyle.height;
                    const newTextOne = arrayBars[barTwoIdx].textContent;
                    const newTextTwo = arrayBars[barOneIdx].textContent;
                    barOneStyle.height = newHeightOne;
                    barTwoStyle.height = newHeightTwo;

                    arrayBars[barOneIdx].textContent = newTextOne;
                    arrayBars[barTwoIdx].textContent = newTextTwo;
                }, i * 10);
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
        }, size * (1 / configuration.speed) * 220); //220

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
