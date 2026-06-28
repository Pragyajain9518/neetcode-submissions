class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let merged = [...nums2, ...nums1.slice(0,m)]
 
                for (let i = 0; i < merged.length; i++){

                    nums1[i] = merged[i]
                }
        return nums1.sort((a,b)=> a - b)
        
    }
}
