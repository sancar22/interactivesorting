import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import { useSelector } from "react-redux";
import Bars from "./components/bars/Bars";
import { getMergeSortAnimations } from "./algorithms/MergeSort";
import { getBubbleSortAnimations } from "./algorithms/BubbleSort";
import { getQSAnim } from "./algorithms/QuickSort";
import { getHeapSortAnimations } from "./algorithms/HeapSort";
import { animator, mergeAnimator } from "./animators/Animators";
import "./App.css";

function App() {
    const width = useResponsive();
    const configuration = useSelector(state => state.configuration);
    const [isRunning, setIsRunning] = useState(true);
    const { arraySize, speed, randomArray, sortAlgorithm } = configuration;
    const firstUpdate = useRef(true);
    const time = sortAlgorithm !== "Bubble Sort" ? 220 : 770;

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!isRunning) {
            sortAlgorithm === "Merge Sort"
                ? mergeSort()
                : sortAlgorithm === "Bubble Sort"
                ? bubbleSort()
                : sortAlgorithm === "Quick Sort"
                ? quickSort()
                : heapSort();
        }
    }, [isRunning]);

    const mergeSort = () => {
        const animations = getMergeSortAnimations(randomArray);
        mergeAnimator(animations, speed);
        timerQMHB(time);
    };

    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(randomArray);
        animator(animations, speed);
        timerQMHB(time);
    };

    const quickSort = () => {
        const animations = getQSAnim(randomArray, 0, arraySize - 1);
        animator(animations, speed);
        timerQMHB(time);
    };

    const heapSort = () => {
        const animations = getHeapSortAnimations(randomArray);
        animator(animations, speed);
        timerQMHB(time);
    };

    const timerQMHB = time =>
        setTimeout(() => {
            setIsRunning(true);
            arrayOriginalColor(arraySize);
        }, arraySize * (1 / speed) * time);

    const clickHandler = () => {
        if (sortAlgorithm !== "Select...") {
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
                {randomArray.map((num, index) => {
                    const backgroundColor = "blue";
                    return (
                        <Bars
                            key={index}
                            idx={index}
                            width={100 / arraySize}
                            height={0.87 * num}
                            children={num}
                            size={arraySize}
                            bgColor={backgroundColor}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;

function arrayOriginalColor(arraySize) {
    const arrayBars = document.getElementsByClassName("bars");
    for (let i = 0; i < arraySize; i++) {
        arrayBars[i].style.backgroundColor = "blue";
    }
}

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
