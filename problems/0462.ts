function minMoves2(nums: number[]): number {
  const median = nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
  let ans = 0;
  for (const num of nums) {
    ans += Math.abs(num - median);
  }
  return ans;
};
