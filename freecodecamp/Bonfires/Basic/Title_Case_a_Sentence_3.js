function titleCase(str) {
  str = str.toLowerCase();
  var ar = str.split(" ");
  for (var i = 0; i < ar.length; i++) {
    ar[i] = ar[i][0].toUpperCase() + ar[i].substr(1);
  }
  str = ar.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
