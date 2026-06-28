class Solution {
    hasDuplicate(nums) {

        let map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                return true; // duplicate found
            }

            map.set(num, true);
        }

        return false;
    }
}