class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let i = 0;
        const result = {};
        while (i < strs.length) {
            const arr = strs[i].split('');
            const key = arr.sort().join('');
            result[key] = result[key] || [];
            result[key].push(strs[i]);
            ++i;
        }

        return Object.values(result);
    }
}
