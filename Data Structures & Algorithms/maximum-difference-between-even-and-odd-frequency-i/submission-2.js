class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
let map = new Map();

for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
    } else {
        map.set(s[i], 1);
    }
}


let maxOdd = 0;
let minEven = Infinity;

for (let value of map.values()) {
    if (value % 2 !== 0) {
        maxOdd = Math.max(maxOdd, value);
    } else {
        minEven = Math.min(minEven, value);
    }
}

return maxOdd - minEven;
    }}