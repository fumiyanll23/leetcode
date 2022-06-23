function removeDuplicates(nums: number[]): number {
  let ans = 0;
  const numm = nums.reduce((x, y) => Math.max(x, y));
  let check = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === check) {
      nums[i] = numm + 1;
      ans += 1;
    }
    else {
      check = nums[i];
    }
  }
  nums.sort((x, y) => x - y);
  return nums.length - ans;
};
