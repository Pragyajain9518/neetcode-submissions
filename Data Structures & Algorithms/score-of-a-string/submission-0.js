class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //  str.charCodeAt(i))
    scoreOfString(s) {
let data = []
      for (let i = 0; i < s.length-1; i++){
         data.push(s.charCodeAt(i+1) -  s.charCodeAt(i))
         console.log(data)
                  }
     let absSum = data.reduce((sum, num) => {
  return sum + Math.abs(num);
}, 0);

      
return absSum
    }
}
