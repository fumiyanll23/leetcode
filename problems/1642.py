class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        diffs = [heights[i+1] - heights[i] for i in range(len(heights)-1)]
        print(diffs)
        ans = 0
        for diff in diffs:
            if diff > 0:
                if diff <= bricks:
                    bricks -= diff
                elif ladders > 0:
                    ladders -= 1
                else:
                    break
            ans += 1
        print(diff, bricks, ladders, ans)
        return ans
