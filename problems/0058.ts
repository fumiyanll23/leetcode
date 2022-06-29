function lengthOfLastWord(s: string): number {
  let ans = 0;
  for (const word of s.split(" ")) {
    if (word.length !== 0) {
      ans = word.length;
    }
  }
  return ans;
};
