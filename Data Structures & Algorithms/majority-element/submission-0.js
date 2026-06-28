class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
          const map = new Map();


for (let num of nums) {
  if (map.has(num)) {
    let currentCount = map.get(num);
    map.set(num, currentCount + 1);
  } else {
    map.set(num, 1);
  }
}
let maxValue = nums.length / 2
for (let [key, value] of map){
    if (value > maxValue){
        return key
}
}

    }        
}
