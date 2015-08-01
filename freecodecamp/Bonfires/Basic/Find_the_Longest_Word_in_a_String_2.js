function findLongestWord(str) {
  //str len=0;
  str = str.split(' ').reduce(function(previousValue, currentValue, index, array) {
    if (previousValue < currentValue.length) {
      return currentValue.length;
    } else {
      return previousValue;
    }
  }, 0);
  //console.log(Math.max.apply(null,str));
  return str;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
