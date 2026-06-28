class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
           
           let common = ""

        for (let i = 0; i < strs[0].length ; i ++){
     let stringData = strs[0][i]
              for (let j = 1 ; j < strs.length; j++  ){
                
            if(stringData !== strs[j][i] ){
               return common      
            }
           
                     }
                   common = common + stringData
              }
      return common  

        }
    }

