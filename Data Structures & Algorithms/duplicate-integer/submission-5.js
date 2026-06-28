class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

    const same = new Set();
      for (let i = 0 ; i < nums.length; i ++){
        if (same.has(nums[i])){
          return true

        }
        same.add(nums[i])
      }
       return false
    }
}
