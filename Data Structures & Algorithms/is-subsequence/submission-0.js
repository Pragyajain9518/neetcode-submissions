class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

         let i = 0
         let j = 0
         let newData = ""
       while (i < s.length && j < t.length){
          if (s[i] === t[j]){
            newData += t[j]
        
            i++;
            j++
         }else {
            j++
         }

             console.log(newData)

       }
     if (s === newData){
        return true
     }
     return false
    }
}
