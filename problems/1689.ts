function minPartitions(n: string): number {
  let ans = 0;
  for (const char of n) {
    ans = Math.max(ans, Number(char));
  }
  return ans;
};
