function palindrome(str) {
  // Good luck!
  var x = false;
  str = str.replace(/[\s\.\,]/gi, "").toLowerCase();

  for (var i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      x = true;
      break;
    }

  }
  if (x === true) {
    return false;
  } else {
    return true;
  }
}
palindrome("A man, a plan, a canal. Panama");
