class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //  str.charCodeAt(i))
    scoreOfString(s) {
let data = 0
      for (let i = 0; i < s.length-1; i++){
         data += Math.abs(s.charCodeAt(i+1) -  s.charCodeAt(i))
         console.log(data)
                  }

return data
    }
}
