"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeapSortAnimations = getHeapSortAnimations;

function heapify(arr, length, i, animations) {
  var largest = i;
  var left = i * 2 + 1;
  var right = left + 1;

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
    var _ref = [arr[largest], arr[i]];
    arr[i] = _ref[0];
    arr[largest] = _ref[1];
    heapify(arr, length, largest, animations);
  }

  return arr;
}

function getHeapSortAnimations(arr) {
  var animations = [];
  var length = arr.length;
  var i = Math.floor(length / 2 - 1); // Index

  var k = length - 1; // Index

  animations.push([0, 0, false]);

  while (i >= 0) {
    heapify(arr, length, i, animations);
    i--;
  }

  while (k >= 0) {
    animations.push([0, k, true]);
    var _ref2 = [arr[k], arr[0]];
    arr[0] = _ref2[0];
    arr[k] = _ref2[1];
    heapify(arr, k, 0, animations);
    k--;
  }

  return animations;
}