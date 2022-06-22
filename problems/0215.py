from collections import Counter

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        cntd = Counter(reversed(sorted(nums)))
        now = 0
        for ki, vi in cntd.items():
            now += vi
            if now >= k:
                return ki
