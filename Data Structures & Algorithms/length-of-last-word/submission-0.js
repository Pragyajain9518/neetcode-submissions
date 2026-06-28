class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {

        const data = s.trim()
        let countData = 0
    for (let i = 0 ; i < data.length; i++ ){

       if (data[i] === (" ")){
        countData = 0
       }
       else {
           countData ++;
       }

      console.log(countData)
    }
    return countData
    }

}
