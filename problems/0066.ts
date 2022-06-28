function plusOne(digits: number[]): number[] {
  const newDigits = String(BigInt(String(digits.join(""))) + BigInt(1)).split("");
  const ans: number[] = [];
  for (const newDigit of newDigits) {
    ans.push(Number(newDigit));
  }
  return ans;
};
