function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  while (arr.length) {
    //newArr = arr.splice(0, size);
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
