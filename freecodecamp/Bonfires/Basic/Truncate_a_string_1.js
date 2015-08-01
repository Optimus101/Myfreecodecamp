function truncate(str, num) {
  // Clear out that junk in your trunk
  var ln = 0;
  if (str.length == num || str.length < num) {
    return str;
  }
  str = str.split(" ").map(function(x) {

    ln = x.length + ln;
    if (ln < num) {
      return x;
    }
  }).join(" ").trim().concat('...');
  //alert(str);
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
