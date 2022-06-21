function longestCommonPrefix(strs: string[]): string {
  const target = strs[0];
  let ans = "";
  for (let i = 0; i < target.length; i++) {
    for (const str of strs.slice(1)) {
      if (target[i] !== str[i]) {
        return ans;
      }
    }
    ans += target[i];
  }
  return ans;
};
