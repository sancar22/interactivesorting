import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Logo from "../../assets/bars.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { config, arraySet } from "../../actions/";
import { useDispatch, useSelector } from "react-redux";

function Navigation({ isRunning, ...props }) {
  const [sizeVal, setSizeVal] = useState(10);
  const [speedVal, setSpeedVal] = useState(5);
  const [algorithm, setAlgorithm] = useState("Select...");
  //const isRunning = useSelector(state => state.started);
  const dispatch = useDispatch();
  const searchAlgorithms = [
    "Bubble Sort",
    "Quick Sort",
    "Merge Sort",
    "Heap Sort",
  ];

  useEffect(() => {
    //Update array as slider moves
    dispatch(arraySet(sizeVal));
  }, [sizeVal]);

  const handleClick = () => {
    if (algorithm !== "Select...") {
      dispatch(config({ algo: algorithm, speed: speedVal, size: sizeVal }));
      //mergeSort();
    } else {
      alert("Choose an algorithm!");
    }
  };
  useEffect(() => {
    dispatch(config({ algo: algorithm, speed: speedVal, size: sizeVal }));
  }, [sizeVal, speedVal, algorithm]);
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
                className={isRunning ? "dropDown" : "dropDownOp"}
                disabled={isRunning ? null : "disabled"}
              />
            </div>
            <div className="columnO1">
              <div className="textT1">Array Size</div>
              <div className="slider">
                <input
                  id="sizeChanger"
                  type="range"
                  min="4"
                  max="100"
                  defaultValue="3"
                  disabled={isRunning ? null : "disabled"}
                  onChange={e => setSizeVal(e.target.value)}
                />
                <div className={isRunning ? "slideVal" : "slideValOp"}>
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
                <div className={isRunning ? "slideVal" : "slideValOp"}>
                  {speedVal}
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className={isRunning ? "buttonSort" : "buttonSortOp"}
              disabled={isRunning ? null : "disabled"}
            >
              SORT!
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}
export default Navigation;
