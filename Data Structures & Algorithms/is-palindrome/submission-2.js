class Solution {
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const chars = s.split('');
        const validChars = [];

        for (let c of chars) {
            if (!!this.isAlphanumeric(c)) {
                validChars.push(c.toLowerCase());
            }
        }

        const middle = Math.floor(validChars.length / 2);
        const lastIndex = validChars.length - 1;

        for (let i = 0; i < middle; ++i) {
            if (validChars[i] === ' ') {
                continue;
            }

            if (validChars[i].toLowerCase() !== validChars[lastIndex - i].toLowerCase()) {
                return false;
            }
        }

        return true;
    }
}
