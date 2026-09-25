class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (const str of strs) {
            const sorted = [...str].sort((a, b) => a.localeCompare(b)).join('');
            if (!anagrams.has(sorted)) {
                anagrams.set(sorted, [])
            }

            anagrams.get(sorted).push(str)
        }

        return [...anagrams.values()]
    }
}
