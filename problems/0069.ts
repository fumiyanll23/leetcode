function mySqrt(x: number): number {
  let ans = 0;
  while (ans ** 2 <= x) {
    ans++;
  }
  return ans - 1;
};
