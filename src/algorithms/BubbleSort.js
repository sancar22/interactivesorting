export function getBubbleSortAnimations(arr) {
    const animations = [];

    let len = arr.length;
    animations.push([0, 0, false]);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            animations.push([j, j + 1, false]); // color values being compared
            if (arr[j] > arr[j + 1]) {
                // swapped values
                animations.pop();
                animations.push([j, j + 1, true]);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else {
                animations.push([j, j + 1, false]);
            }
        }
    }

    return animations;
}
