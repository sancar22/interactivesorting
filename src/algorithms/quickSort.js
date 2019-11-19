function swap(items, leftIndex, rightIndex, animations) {
    animations.push([leftIndex, rightIndex, true]);
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right, animations) {
    let idx = Math.floor((right + left) / 2);
    let pivot = items[idx], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        animations.push([i, idx, false]); // PURPOSELY PUSHING TWICE FOR ANIMATIONS
        animations.push([i, idx, false]);
        while (items[i] < pivot) {
            i++;
            animations.push([i, idx, false]);
            animations.push([i, idx, false]);
        }
        animations.push([j, idx, false]);
        animations.push([i, idx, false]);
        while (items[j] > pivot) {
            j--;
            animations.push([j, idx, false]);
            animations.push([i, idx, false]);
        }
        if (i <= j) {
            swap(items, i, j, animations); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSortHelper(items, left, right, animations) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSortHelper(items, left, index - 1, animations);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSortHelper(items, index, right, animations);
        }
    }
    return animations;
}

export const getQSAnim = (items, left, right) => {
    const animations = [];
    animations.push([0, 0, false]);
    const animat = quickSortHelper(items, left, right, animations);
    return animat;
};
