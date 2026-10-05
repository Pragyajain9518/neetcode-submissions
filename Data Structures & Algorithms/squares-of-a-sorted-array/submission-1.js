class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {

         let i = 0
         let j = nums.length - 1
         let result = new Array(nums.length); // length of array 

         for (let k = nums.length - 1; k>=0; k--){

            let leftsqaure = nums[i] ** 2
            let rightsqaure = nums[j] ** 2

            if (leftsqaure > rightsqaure ){

                  result[k] = leftsqaure;
                i ++;

            } else {
                 result[k] = rightsqaure
                    j--
            }


                
            
         }


          return result

    }
  
}
