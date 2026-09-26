class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b)

        let newArray = []

        for (let i = 0; i < nums.length; i++) {

            // Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {

                let sumValue = nums[i] + nums[left] + nums[right]

                if (sumValue === 0) {

                    newArray.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ])

                    left++
                    right--

                    // Skip duplicate left values
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }

                    // Skip duplicate right values
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }

                } else if (sumValue < 0) {

                    left++

                } else {

                    right--
                }
            }
        }

        return newArray
    }
}