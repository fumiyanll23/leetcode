function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const diffs: number[] = [];
  for (let i = 0; i < heights.length-1; i++) {
    diffs.push(heights[i+1] - heights[i]);
  }
  console.log(diffs);
  let ans = 0;
  for (const diff of diffs) {
    if (diff > 0) {
      if (diff <= bricks) {
        bricks -= diff;
      }
      else if (ladders > 0) {
        ladders -= 1;
      }
      else {
        break;
      }
    }
    ans += 1;
    console.log(diff, bricks, ladders, ans);
  }
  return ans;
};
