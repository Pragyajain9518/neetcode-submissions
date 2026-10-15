class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
             let ans =[]
        
          for (let i = 0; i < nums.length; i++){

                 ans[i] = nums[i]


          }
             return nums.concat(ans)
    }
}
