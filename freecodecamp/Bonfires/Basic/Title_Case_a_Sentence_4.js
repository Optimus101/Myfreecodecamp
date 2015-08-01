function titleCase(str) {
  str = str.split(' ').map(function(x) {
    return x.split('').map(function(y, i, a) {
      if (i === 0)
        return y.toUpperCase();
      else
        return y.toLowerCase();
    }).join('');
  }).join(' ');
  return str;
}

console.log(titleCase("I'm a liTTtle tEa pOt"));
