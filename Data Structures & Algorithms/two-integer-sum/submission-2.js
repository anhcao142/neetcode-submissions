class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = nums.reduce((acc, num, i) => {
            acc[num] = acc[num] || []
            acc[num].push(i)

            return acc;
        }, {})
        console.log('hash', hash)

        let i = 0;
        while (i < nums.length) {
            const b = target - nums[i];
            let j = 0;
            console.log(i, hash[b])
            while (hash[b] !== undefined && j < hash[b].length) {
                if (i !== hash[b][j]) {
                    return [i, hash[b][j]]
                } else {
                    ++j;
                }
            }
            ++i;
        }

        return [0, 0]
    }
}
