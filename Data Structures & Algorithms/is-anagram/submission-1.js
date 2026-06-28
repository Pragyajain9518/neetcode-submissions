class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sorted1 = s.split("").sort().join("");
        let sorted2 = t.split("").sort().join("");

        if (sorted1 === sorted2){
            return true
        }
        return false
    }
}
