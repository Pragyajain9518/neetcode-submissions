class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;

        while (i < word.length && j < abbr.length) {

            // Letter
            if (isNaN(abbr[j])) {
                if (word[i] !== abbr[j]) {
                    return false;
                }

                i++;
                j++;
            }

            // Number
            else {
                // Leading zero is invalid
                if (abbr[j] === '0') {
                    return false;
                }

                let num = 0;

                while (j < abbr.length && !isNaN(abbr[j])) {
                    num = num * 10 + Number(abbr[j]);
                    j++;
                }

                i += num;
            }
        }

        return i === word.length && j === abbr.length;
    }
}