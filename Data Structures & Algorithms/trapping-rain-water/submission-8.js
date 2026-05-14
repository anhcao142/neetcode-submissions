class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0;
        let leftMax = 0;
        let rightMax = height.length - 1;

        let i = 0;
        let j = rightMax;
        while (i <= j) {
            if (height[leftMax] < height[rightMax]) {
                if (height[leftMax] > height[i]) {
                    area += height[leftMax] - height[i];
                } else {
                    leftMax = i
                }
                ++i;
            } else {
                if (height[j] < height[rightMax]) {
                    area += height[rightMax] - height[j]
                } else {
                    rightMax = j;
                }
                --j;
            }
        }

        return area;
    }
}
