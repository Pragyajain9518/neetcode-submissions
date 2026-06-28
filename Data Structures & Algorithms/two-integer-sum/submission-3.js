class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

             const map = new Map();
        for (let i =0; i < nums.length; i ++){

            const valueSum = target - nums [i]
          
           if (map.has(valueSum)) {
        return [map.get(valueSum), i];
      }

      map.set(nums[i], i);
    }
        }  
    }

