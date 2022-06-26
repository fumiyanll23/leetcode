function maxScore(cardPoints: number[], k: number): number {
  let tmp_ans = cardPoints.slice(0, k).reduce((sum, cardPoint) => sum + cardPoint, 0);
  let ans = tmp_ans;
  for (let i = k - 1; i > -1; i--) {
    tmp_ans += cardPoints[cardPoints.length -k + i] - cardPoints[i];
    ans = Math.max(ans, tmp_ans);
  }
  return ans;
};
