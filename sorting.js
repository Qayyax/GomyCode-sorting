function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// Example usage:
const arr = [7, 3, 1, 5, 2, 4, 6];
const sortedArr = insertionSort(arr);
console.log(sortedArr);

