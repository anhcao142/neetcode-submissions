class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = {};
        let leftProduct = 1;
        for (let i = 0; i < nums.length; i += 1) {
            res[i] = leftProduct;
            leftProduct *= nums[i];
        }

        let rightProduct = 1;
        for (let j = nums.length - 1; j >= 0; j -= 1) {
            res[j] *= rightProduct;
            rightProduct *= nums[j];
        }

        return Object.values(res);
    }
}
