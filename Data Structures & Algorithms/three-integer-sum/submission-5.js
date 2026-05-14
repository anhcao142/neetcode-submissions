class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = [...nums];
        const sorted = arr.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sorted.length; i += 1) {
            const first = sorted[i];

            let j = i+1;
            let k = sorted.length - 1;
            const left = 0 - first;

            while (j < k) {
                const sum = sorted[j] + sorted[k];
                if (sum > left) {
                    k -= 1;
                } else if (sum < left) {
                    j += 1;
                } else if (sum == left) {
                    let isExist = false;
                    for (let r of res) {
                        if (!isExist && r[1] == sorted[j] && r[2] == sorted[k]) {
                            isExist = true;
                        }
                    }

                    if (!isExist) {
                        res.push([sorted[i], sorted[j], sorted[k]]);
                    }
                    j += 1;
                }
            }
        }

        return res;
    }
}
