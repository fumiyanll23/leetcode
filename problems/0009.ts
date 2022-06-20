function isPalindrome(x: number): boolean {
  const xs = String(x).split("");
  if (xs.join("") === xs.reverse().join("")) {
    return true;
  }
  else {
    return false;
  }
};
