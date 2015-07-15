function factorialize(num) {
  var i = num;
  var factorial = 1;

  while (i >= 1) {
    factorial *= i;
    i--;
  }

  num = factorial;
  return num;
}

factorialize(5);
