function chunk(arr, size) {
  var result = [];
  var count = 0;
  for (i = 0; i < arr.length / size; i++) {
    var tmparr = [];
    for (j = 0; j < size; j++) {
      if (arr.length > count) {
        tmparr.push(arr[count]);
        count++;
      }
    }

    result.push(tmparr);
  }

  return result;
}

chunk([0, 1, 2, 3, 4, 5], 4);
