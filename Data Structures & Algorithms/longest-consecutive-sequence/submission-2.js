class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestStreak = 0;
        const hash = nums.reduce((acc, num) => {
            acc[num] = 1;
            return acc;
        }, {});

        for (let num of nums) {
            let streak = 1;
            if (hash[num] === 0) {
                continue;
            }

            let numPlus = num + 1;
            let numMinus = num - 1;
            
            while (hash[numPlus] !== undefined) {
                streak += 1;
                hash[numPlus] = 0;
                numPlus += 1;
            }

            console.log(num, numMinus, hash[numMinus])
            while (hash[numMinus] !== undefined) {
                streak += 1;
                hash[numMinus] = 0;
                numMinus -= 1;
            }

            if (longestStreak < streak) {
                longestStreak = streak;
            }

            hash[num] = 0;
        }

        return longestStreak;
    }
}
