class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

           const map = new Map();

           for (let i = 0; i < nums.length ; i++){
                 
                 const targetValue = target- nums [i]

                if (map.has(targetValue)){
                 return [map.get(targetValue), i];
                        
                }

               map.set (nums[i], i) 
           }
    }
}
