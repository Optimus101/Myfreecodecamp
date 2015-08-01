function titleCase(str) {
  return str.split(' ').map(function(x) {
    return x[0].toUpperCase() + x.substr(1).toLowerCase();
  }).join(' ').trim();
}
titleCase("i'm doing something");
