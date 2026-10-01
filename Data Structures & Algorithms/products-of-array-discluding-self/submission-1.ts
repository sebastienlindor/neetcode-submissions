class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pref = Array.from({ length: nums.length }, () => 1);
        const suff = Array.from({ length: nums.length }, () => 1);

        const result: number[] = [];
        for (let i = 1; i < nums.length; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(pref[i] * suff[i]);
        }

        return result;
    }
}

/*
     1,  2,  8, 48 ->  1,  1, 2, 8
    48, 48, 24,  6 -> 48, 24, 6, 1

    nums = 5, 10, 15, 20
    pref = 1,  5, 50, 7500
*/
