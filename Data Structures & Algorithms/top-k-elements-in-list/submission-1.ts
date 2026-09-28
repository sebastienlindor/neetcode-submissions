class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 0);
            }
            map.set(num, map.get(num) + 1);
        }

        for (const [key, value] of map) {
            freq[value].push(key);
        }

        // const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

        // const result = sortedMap.slice(0, k).map(([key, value]) => key);

        const result: number[] = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const key of freq[i]) {
                if (result.length === k) {
                    return result;
                }
                result.push(key)
            }
        }

        return result;
    }
}
