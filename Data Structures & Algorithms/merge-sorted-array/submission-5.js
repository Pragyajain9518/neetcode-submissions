class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

 let mergeString = [...nums1.slice(0, m), ...nums2]
             let newString = []

          for (let i = 0; i < mergeString.length; i++){

                if (mergeString[i] !== 0){
                 nums1[i] = mergeString[i];
                } 
          }
         return nums1.sort((a, b) => a - b) 
    }
    
}
