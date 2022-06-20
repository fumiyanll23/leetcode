function romanToInt(s: string): number {
  let ans = 0;
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (flag) {
      flag = false;
      continue;
    }
    switch (s[i]) {
      case "I":
        if (i+1 < s.length && s[i+1] === "V") {
          ans += 4;
          flag = true;
        }
        else if (i+1 < s.length && s[i+1] === "X") {
          ans += 9;
          flag = true;
        }
        else {
          ans += 1;
        }
        break;
      case "V":
        ans += 5;
        break;
      case "X":
        if (i+1 < s.length && s[i+1] === "L") {
          ans += 40;
          flag = true;
        }
        else if (i+1 < s.length && s[i+1] === "C") {
          ans += 90;
          flag = true;
        }
        else {
          ans += 10;
        }
        break;
      case "L":
        ans += 50;
        break;
      case "C":
        if (i+1 < s.length && s[i+1] === "D") {
          ans += 400;
          flag = true;
        }
        else if (i+1 < s.length && s[i+1] === "M") {
          ans += 900;
          flag = true;
        }
        else {
          ans += 100;
        }
        break;
      case "D":
        ans += 500;
        break;
      default:
        ans += 1000;
        break;
    }
  }
  return ans;
};
