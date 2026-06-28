class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
      let stack = []
let sum = 0
      const result = operations.map(item =>
  isNaN(item) ? item : Number(item)

);
         for (let i=0; i < result.length; i++) {
          let current = result[i]

if (typeof current === "number") {
  stack.push(current);
} else if (current === "C") {
  stack.pop();
} else if (current === "D") {
  stack.push(2 * stack[stack.length - 1]); 
} else if (current === "+") {
  const last = stack[stack.length - 1];
  const secondLast = stack[stack.length - 2];
  stack.push(last + secondLast);
}
        sum =  stack.reduce((acc, curr) => {
  return acc + curr;
}, 0);  
    }


return sum

}
}
