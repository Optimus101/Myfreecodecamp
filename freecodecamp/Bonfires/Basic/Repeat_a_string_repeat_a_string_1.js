function repeat(str, num) {
  // repeat after me
  var temp = '';
  if (num < 0) {
    return '';
  }
  for (i = 0; i < num; i++) {
    temp = temp + str;
  }
  return temp;
}

repeat('abc', 3);
