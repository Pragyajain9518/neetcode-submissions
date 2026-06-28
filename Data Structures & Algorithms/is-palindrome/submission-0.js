class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       const sorted = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = sorted.split("").reverse().join("");
  console.log(reversed)
  console.log(sorted)
           if (sorted == reversed){
            return true
           }else {
            return false
           }
    }
}
