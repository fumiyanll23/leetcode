function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => a[1] - b[1]).reverse();
  let ans = 0;
  for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
    if (truckSize >= numberOfBoxes) {
      ans += numberOfBoxes * numberOfUnitsPerBox;
      truckSize -= numberOfBoxes;
    }
    else {
      ans += truckSize * numberOfUnitsPerBox;
      break;
    }
  }
  return ans;
};
