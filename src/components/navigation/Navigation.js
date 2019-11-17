import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Logo from "../../assets/bars.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { config, arraySet } from "../../actions/";
import { useDispatch, useSelector } from "react-redux";

function Navigation() {
  const [sizeVal, setSizeVal] = useState(10);
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

  useEffect(() => {
    //Update array as slider moves
    dispatch(arraySet(sizeVal));
  }, [sizeVal]);

  const handleClick = () => {
    if (algorithm !== "Select...") {
      dispatch(config({ algo: algorithm, speed: speedVal, size: sizeVal }));
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
                onChange={e => setAlgorithm(e.value)}
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
                  onChange={e => setSizeVal(e.target.value)}
                />
                <div className={algoFinished ? "slideVal" : "slideValOp"}>
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
                  disabled={algoFinished ? null : "disabled"}
                  onChange={e => setSpeedVal(e.target.value)}
                />
                <div className={algoFinished ? "slideVal" : "slideValOp"}>
                  {speedVal}
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className={algoFinished ? "buttonSort" : "buttonSortOp"}
              disabled={algoFinished ? null : "disabled"}
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
