class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            let ch = s[i];

            // opening brackets
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } 
            // closing brackets23
            else {
                if (stack.length === 0) return false;

                let top = stack[stack.length - 1];

                if ((ch === ')' && top === '(') ||
                    (ch === '}' && top === '{') ||
                    (ch === ']' && top === '[')
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
