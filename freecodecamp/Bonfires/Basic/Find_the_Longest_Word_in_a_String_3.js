function findLongestWord(str) {
  var array = str.split(" ");
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i].length);
  }
  return Math.max.apply(null, newArr);
}

findLongestWord('The quick brown fox jumped over the lazy dog');
