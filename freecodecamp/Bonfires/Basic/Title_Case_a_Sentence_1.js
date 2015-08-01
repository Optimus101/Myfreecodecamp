function titleCase(str) {
  str = str.split(" ");
  var string = '';
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
    string = str[i];
  }
  return str.join(" ");
}
titleCase("I'm a little tea pot");
