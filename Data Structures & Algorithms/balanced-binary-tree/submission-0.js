/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
//   if (root === null) return 0; 

  let diameter = true;
        function postOrder(node) {
            if (node === null) return null;
      let left = postOrder(node.left)
        let right = postOrder(node.right)
        
   if (left > right + 1 || right > left + 1) {
    diameter = false;
}

      return 1 + Math.max(left, right);
        }

        postOrder(root);
        return diameter

    }


    }

