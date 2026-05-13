class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const hash = numbers.reduce((acc, num, i) => {
            acc[num] = i;
            return acc;
        }, {});

        for (let i = 0; i < numbers.length; ++i) {
            const num = numbers[i];
            const left = target - num;
            const leftI = hash[left];

            if (leftI > i) {
                return [i + 1, leftI + 1];
            }
        }
    }
}
