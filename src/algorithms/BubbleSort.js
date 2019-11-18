export function getBubbleSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      animations.push([j, j + 1]); // color values being compared
      if (arr[j] > arr[j + 1]) {
        // swapped values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        animations.push([j, j + 1]); // Reverse colors to original
      }
    }
  }

  return animations;
}
