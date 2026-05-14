class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = [];
        const suffix = new Array(height.length);

        let j = height.length - 1;
        for (let i = 0; i < height.length; ++i) {
            j = height.length - 1 - i;
            if (i === 0) {
                prefix[0] = height[i];
            } else {
                prefix[i] = Math.max(prefix[i - 1], height[i])
            }

            if (j === height.length - 1) {
                suffix[j] = height[j];
            } else {
                suffix[j] = Math.max(suffix[j + 1], height[j])
            }
        }

        let area = 0;
        for (let i = 0; i < height.length; ++i) {
            const localArea = Math.min(prefix[i], suffix[i]) - height[i]
            if (localArea > 0) {
                area += localArea;
            }
        }

        return area;
    }
}
