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

        const map = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            let c1 = s[i];

            if (!map.has(c1)) {
                map.set(c1, 0)
            }

            map.set(c1, map.get(c1) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            let c1 = t[i];

            if (!map.has(c1)) {
                return false;
            }

            map.set(c1, map.get(c1) - 1);
        }

        return Array.from(map.values()).every(v => v === 0);
    }
}
