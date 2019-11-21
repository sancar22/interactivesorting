import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { config, arraySet } from "../../actions/";
import { useDispatch } from "react-redux";

function Navigation({ isRunning, ...props }) {
    const Logo = require("../../assets/bars.png");
    const [sizeVal, setSizeVal] = useState(50);
    const [speedVal, setSpeedVal] = useState(5);
    const [algorithm, setAlgorithm] = useState("Select...");
    const dispatch = useDispatch();
    const searchAlgorithms = [
        "Merge Sort",
        "Bubble Sort",
        "Quick Sort",
        "Heap Sort",
    ];

    useEffect(() => {
        //Update array as slider moves
        dispatch(arraySet(sizeVal));
    }, [sizeVal]);

    useEffect(() => {
        dispatch(config({ algo: algorithm, speed: speedVal, size: sizeVal }));
    }, [sizeVal, speedVal, algorithm]);
    const clickHandler = () => {
        dispatch(arraySet(sizeVal));
    };
    return (
        <div className="bodyy">
            <section>
                <header>
                    <div className="navBox">
                        <img className="image" src={Logo} alt="Mixed Array" />

                        <div className="titleP">Interactive Sorting</div>
                        <div className="columnO">
                            <div className="textT">Sorting Algorithm</div>
                            <Dropdown
                                options={searchAlgorithms}
                                onChange={e => setAlgorithm(e.value)}
                                value={algorithm}
                                className={
                                    isRunning ? "dropDown" : "dropDownOp"
                                }
                                disabled={isRunning ? null : "disabled"}
                            />
                        </div>
                        <div className="columnO1">
                            <div className="textT1">Array Size</div>
                            <div className="slider">
                                <input
                                    id="sizeChanger"
                                    type="range"
                                    min="10"
                                    max="100"
                                    defaultValue="50"
                                    disabled={isRunning ? null : "disabled"}
                                    onChange={e => setSizeVal(e.target.value)}
                                />
                                <div
                                    className={
                                        isRunning ? "slideVal" : "slideValOp"
                                    }
                                >
                                    {sizeVal}
                                </div>
                            </div>
                        </div>
                        <div className="columnO1">
                            <div className="textT2">Sort Speed</div>
                            <div className="slider1">
                                <input
                                    id="sizeChanger"
                                    type="range"
                                    min="1"
                                    max="10"
                                    defaultValue="5"
                                    disabled={isRunning ? null : "disabled"}
                                    onChange={e => setSpeedVal(e.target.value)}
                                />
                                <div
                                    className={
                                        isRunning ? "slideVal" : "slideValOp"
                                    }
                                >
                                    {speedVal}
                                </div>
                                <div
                                    onClick={clickHandler}
                                    className="generateArr"
                                    style={{
                                        pointerEvents: isRunning
                                            ? "auto"
                                            : "none",
                                        opacity: !isRunning && "0.5",
                                    }}
                                >
                                    GENERATE NEW ARRAY
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </div>
    );
}
export default Navigation;
