class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {

      let data = s.trim()
   
       let newArrya = 0;
       let i = data.length - 1

     while (i >= 0 && data[i] !== " ") {
        i--
        console.log (i)
        newArrya ++;
       }

       return newArrya
    }
}
