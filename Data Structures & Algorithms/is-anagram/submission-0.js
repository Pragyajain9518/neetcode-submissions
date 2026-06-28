class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const sortedOne = s.split("").sort().join("");
       console.log(sortedOne)
         const sortedTwo = t.split("").sort().join("");
            console.log(sortedTwo)

            if (sortedOne === sortedTwo){
            return true ; 
            }else {
                return false ;
            }
    }
    }

