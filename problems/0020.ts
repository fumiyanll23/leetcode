function isValid(s: string): boolean {
  let ans = true;
  const stacks: string[] = [];
  for (const si of s.split("")) {
    if (si === "(" || si === "{" || si === "[") {
      stacks.push(si);
    }
    else {
      const n = stacks.length;
      switch (si) {
        case ")":
          if (stacks[n-1] === "(") {
            stacks.pop();
          }
          else {
            ans = false;
          }
          break;
        case "}":
          if (stacks[n-1] === "{") {
            stacks.pop();
          }
          else {
            ans = false;
          }
          break;
        default:
          if (stacks[n-1] === "[") {
            stacks.pop();
          }
          else {
            ans = false;
          }
          break;
      }
    }
  }
  if (stacks.length !== 0) {
    ans = false;
  }
  return ans;
};
