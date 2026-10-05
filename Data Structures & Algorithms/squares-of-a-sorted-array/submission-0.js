class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {

            let newArray = []
        for (let i = 0; i < nums.length; i++){

             let sqaure = nums[i] ** 2
             newArray.push(sqaure)
        }
          return newArray.sort((a,b) => a-b)
    }
  
}
