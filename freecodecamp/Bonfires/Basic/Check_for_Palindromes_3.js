function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/\W/g, '');
  rev = str.split('').reverse().join('');
  if (str !== rev) {
    return false;
  }
  return true;
}

palindrome("eye");
