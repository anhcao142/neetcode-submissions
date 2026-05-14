class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            const area = Math.min(heights[i], heights[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
            
            if (heights[i] <= heights[j]) {
                i += 1;
            } else {
                j -= 1;
            }
        }

        return maxArea;
    }
}
