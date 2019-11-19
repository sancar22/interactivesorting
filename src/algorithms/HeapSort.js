function heapify(arr, length, i, animations) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
        animations.push([left, largest, false]);
        animations.push([left, largest, false]);
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        animations.push([right, largest, false]);
        animations.push([right, largest, false]);
        largest = right;
    }

    if (largest !== i) {
        animations.push([i, largest, true]);
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, length, largest, animations);
    }
    return arr;
}

export function getHeapSortAnimations(arr) {
    let animations = [];
    let length = arr.length;
    let i = Math.floor(length / 2 - 1); // Index
    let k = length - 1; // Index
    animations.push([0, 0, false]);

    while (i >= 0) {
        heapify(arr, length, i, animations);
        i--;
    }

    while (k >= 0) {
        animations.push([0, k, true]);
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, k, 0, animations);
        k--;
    }
    return animations;
}
