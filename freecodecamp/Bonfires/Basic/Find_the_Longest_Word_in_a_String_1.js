function findLongestWord(str) {
  str = str.split(" ");
  var length = 0;
  for (i = 0; i < str.length; i++) {
    if (length < str[i].length) {
      length = str[i].length;
    }
  }
  return length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
