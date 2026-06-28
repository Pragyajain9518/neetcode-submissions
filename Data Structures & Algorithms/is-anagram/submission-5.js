class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
               let map = new Map()

               if (s.length != t.length) return false;
        for (let i of s){

          map[i] = (map[i] || 0) + 1
        }

         for (let i of t){

       if (!map[i])
        return false
        map[i]--
          
        }
        return true
    }
}

