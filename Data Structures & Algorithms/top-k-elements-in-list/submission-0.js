class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countObj = nums.reduce((acc, num, i) => {
            acc[num] = acc[num] || 0;
            acc[num] += 1;
            return acc;
        }, {});

        return Object
            .entries(countObj)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(v => v[0]);
    }
}
