class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const frequency = new Array<number>(60).fill(0);

        for (let i = 0; i < s.length; i++) {
            frequency[s.charCodeAt(i) - 65]++;
            frequency[t.charCodeAt(i) - 65]--;
        }

        return frequency.every(value => value === 0);
    }
}
