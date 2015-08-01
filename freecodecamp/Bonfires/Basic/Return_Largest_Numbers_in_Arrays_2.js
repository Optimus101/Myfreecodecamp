function largestOfFour(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr[i] = arr[i][0];
    console.log(newArr[i]);
    for (j = 0; j < arr[i].length; j++) {
      if (newArr[i] < arr[i][j]) {
        newArr[i] = arr[i][j];
      }
    }
  }

  return newArr;
}
largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [10000, 1001, 857, 1]
]);
