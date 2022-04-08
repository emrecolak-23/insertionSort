let arr = [22,27,16,2,18,6];

function insertionSort(arr) {
  let values = [];
  for (let i =0;i<arr.length-1;i++) {
    for (let j =i+1; j<arr.length;j++) {
      if (arr[i]>arr[j]) {
        values.push(arr[i]);
        arr[i] = arr[j];
        arr[j] = values[0];
        values = []
      }
    }
  }
  return arr
}

console.log(insertionSort(arr))