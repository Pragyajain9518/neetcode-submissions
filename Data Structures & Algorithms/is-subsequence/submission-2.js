class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

      let i = 0 
      for (let j = 0; j < t.length && i < s.length ; j++){

        if (t[j] === s[i]){
            i++
        }

      }

        return (i === s.length)
    }
}
