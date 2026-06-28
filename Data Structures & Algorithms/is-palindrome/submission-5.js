class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

      let newString = s.toLowerCase().replace(/[^a-z0-9]/g, '')

            let l = 0
            let r = newString.length - 1


          while (l < r) {

        if (newString[l] !== newString[r]){

          return false
        }

             l++
             r--

          }
return true
        
    }


}
