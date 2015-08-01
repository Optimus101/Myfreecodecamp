function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/\W+/g, '');
  //alert(str);
  var str1 = str.split('').reverse().join('');
  if (str === str1)
    return true;
  else
    return false;
}

palindrome("A man, a plan, a canal. Panama");
