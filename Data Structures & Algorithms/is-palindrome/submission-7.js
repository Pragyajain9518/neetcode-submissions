class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let left = 0;
        let right = newString.length - 1;

        while (left < right) {
            if (newString[left] !== newString[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}