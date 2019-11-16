import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/bars.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { config } from "../../actions/";
import { useDispatch, useSelector } from "react-redux";

function Navigation() {
  const [sliderVal, setSliderVal] = useState(10);
  const [speedVal, setSpeedVal] = useState(5);
  const [algorithm, setAlgorithm] = useState("Select...");
  const algoFinished = useSelector(state => state.configuration.finished);
  const dispatch = useDispatch();
  const searchAlgorithms = [
    "Bubble Sort",
    "Quick Sort",
    "Merge Sort",
    "Heap Sort",
  ];

  const handleSelect = e => {
    setAlgorithm(e.value);
  };
  const handleSizeSliderChange = e => {
    setSliderVal(e.target.value);
  };
  const handleSpeedSliderChange = e => {
    setSpeedVal(e.target.value);
  };

  const handleClick = () => {
    if (algorithm !== "Select...") {
      dispatch(config({ algo: algorithm, speed: speedVal, slider: sliderVal }));
    } else {
      alert("Choose an algorithm!");
    }
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
                onChange={handleSelect}
                value={algorithm}
                className={algoFinished ? "dropDown" : "dropDownOp"}
                disabled={algoFinished ? null : "disabled"}
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
                  defaultValue="10"
                  disabled={algoFinished ? null : "disabled"}
                  onChange={handleSizeSliderChange}
                />
                <div className={algoFinished ? "slideVal" : "slideValOp"}>
                  {sliderVal}
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
                  disabled={algoFinished ? null : "disabled"}
                  onChange={handleSpeedSliderChange}
                />
                <div className={algoFinished ? "slideVal" : "slideValOp"}>
                  {speedVal}
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="buttonSort">
              SORT!
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}
export default Navigation;
