class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const key = target - nums[i];

            if (seen.has(key)) {
                return [seen.get(key), i];
            }

            seen.set(nums[i], i);
        }
    }
}
