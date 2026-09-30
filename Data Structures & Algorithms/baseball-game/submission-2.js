class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

        let stack = [];

        for (let i = 0; i < operations.length; i++) {

            if (!isNaN(Number(operations[i]))) {

                stack.push(Number(operations[i]));

            } else if (operations[i] === "+") {

                let sum =
                    stack[stack.length - 1] +
                    stack[stack.length - 2];

                stack.push(sum);

            } else if (operations[i] === "C") {

                stack.pop();

            } else if (operations[i] === "D") {

                let double = stack[stack.length - 1] * 2;

                stack.push(double);
            }
        }

        return stack.reduce((sum, current) => sum + current, 0);
    }
}