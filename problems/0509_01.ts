function fib(n: number): number {
  const dp: number[] = new Array(n);
  for (let i = 0; i < n + 1; i++) {
    if (i === 0) {
      dp[i] = 0;
    }
    else if (i === 1) {
      dp[i] = 1;
    }
    else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n];
};
