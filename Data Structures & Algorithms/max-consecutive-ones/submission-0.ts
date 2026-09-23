class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        
        let max = 0;
        let count = 0;
        for (const num of nums) {
            if (num === 0) {
                max = Math.max(count, max);
                count = 0;
            } else {
                count++;
            }
        }

        return Math.max(max, count);
    }
}
