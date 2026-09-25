class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          
    const updateData = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

         
         let i = 0
         let j = updateData.length - 1

  while (i < j) {
         if (updateData[i] !== updateData[j]){

           return false 
         
         }
           i++;
           j--

         }
return  true
    }

}

