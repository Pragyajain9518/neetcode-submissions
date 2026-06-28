class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     
     const data = new Set ()
     
     for (let i =0; i < nums.length ; i ++){
       if (data.has(nums[i])){
        return true
       }
            data.add(nums[i])
     }
   
return false
    }
}
