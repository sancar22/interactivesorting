export const animator = (animations, speed) => {
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
        }, i * (1 / speed) * 10);

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
            }, i * (1 / speed) * 10);
        }
    }
};

export const mergeAnimator = (animations, speed) => {
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
            }, i * (1 / speed) * 10);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                arrayBars[barOneIdx].textContent = newHeight;

                barOneStyle.height = `${newHeight * 0.87}vh`;
            }, i * (1 / speed) * 10);
        }
    }
};
