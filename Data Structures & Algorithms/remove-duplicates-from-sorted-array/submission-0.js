class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

       let k = 0 

         const data = new Set ()
     
     for (let i = 0; i < nums.length ; i ++){

      // while (nums [i] < nums [i + 1 ]){
       if (data.has(nums[i])){
            continue;
             
       }
            data.add(nums[i])
            nums[k] = nums[i]
            k++;

     }


return k
     }



}
