import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/bars.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { config } from "../../actions/";
import { useDispatch } from "react-redux";

function Navigation() {
  const [sliderVal, setSliderVal] = useState(10);
  const [speedVal, setSpeedVal] = useState(5);
  const [algorithm, setAlgorithm] = useState("Select...");
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
    dispatch(config({ algo: algorithm, speed: speedVal, slider: sliderVal }));
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
                className="dropDown"
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
                  //disabled={isRunning ? "disabled" : null}
                  onChange={handleSizeSliderChange}
                />
                <div className="slideVal">{sliderVal}</div>
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
                  //disabled={isRunning ? "disabled" : null}
                  onChange={handleSpeedSliderChange}
                />
                <div className="slideVal">{speedVal}</div>
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
