class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let box3x3 = {};
        let row = {};
        let col = {};

        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[i].length; ++j) {
                const num = board[i][j];
                const box3x3Num = this.find3x3(j, i);

                if (num === ".") {
                    continue;
                }

                if (
                    row[i]?.[num] !== undefined ||
                    col[j]?.[num] !== undefined ||
                    box3x3[box3x3Num]?.[num] !== undefined
                ) {
                    return false;
                }
                row[i] = {
                    ...row[i],
                    [num]: 1,
                };
                col[j] = {
                    ...col[j],
                    [num]: 1
                }
                box3x3[box3x3Num] = {
                    ...box3x3[box3x3Num],
                    [num]: 1
                }
            }
        }

        return true;
    }

    // return a number
    find3x3(i, j) {
        const x = Math.floor(i / 3);
        const y = Math.floor(j / 3);

        return 3 * y + x;
    }
}
