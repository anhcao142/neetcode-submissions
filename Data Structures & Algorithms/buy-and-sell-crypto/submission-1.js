class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min;
        let max = 0;
        let maxProfit = 0;

        for (let p of prices) {
            if (min == undefined) {
                min = p;
                max = min;
            }

            if (min > p) {
                min = p;
                max = min;
            }

            if (max < p) {
                max = p
                maxProfit = Math.max(max - min, maxProfit)
            }
        }

        return Math.max(maxProfit, 0)
    }
}
