class Solution {
    findMaxConsecutiveOnes(nums) {
        let storeNumber = 0; 
        let data = 0;     

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                storeNumber++;
                data = Math.max(data, storeNumber);
            } else {
                storeNumber = 0;
            }
        }

        return data;
    }
}
