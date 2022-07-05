from collections import Counter

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        cntd = Counter(nums)
        for num in nums:
            if cntd[num] == 1:
                return num
