class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
  const map = new Map();
      for (let i = 0 ; i < nums.length ; i++ ){
     
        const sumValue = target - nums [i]
        if (map.has(sumValue)){
         return [map.get(sumValue), i];
        }
        map.set(nums[i], i);
      }
    
    }
}
