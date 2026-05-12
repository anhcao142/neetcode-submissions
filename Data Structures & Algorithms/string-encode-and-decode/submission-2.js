class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = `${strs.length}|`;
        for (let s of strs) {
            res += s.length + '|';
        }

        return res + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const split = str.split('|');
        const strsLength = split[0];
        let strStart = split[0].length + 1;

        for (let i = 0; i < Number(strsLength); ++i) {
            strStart += split[i + 1].length
            strStart += 1 // for |
        }

        console.log(split, strStart)

        const strs = [];
        for (let i = 0; i < Number(strsLength); ++i) {
            strs.push(str.slice(strStart, strStart + Number(split[i + 1])))
            strStart += Number(split[i + 1])
        }

        return strs;
    }
}
