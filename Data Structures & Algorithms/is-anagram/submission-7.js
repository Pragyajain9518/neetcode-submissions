class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

      let map = {}
if(s.length != t.length) return false
      for (let char of t){

        map[char] = (map[char] || 0 ) + 1

      }

        for (let char of s){
             if (!map[char])
              return false
          
             

          
             map[char]--
        }
    return true
      }

    
}
