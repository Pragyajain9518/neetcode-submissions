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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
   if (root === null) return 0; 

  let diameter = 0;
        function postOrder(node) {
            if (node === null) return 0;
      let left = postOrder(node.left)
        let right = postOrder(node.right)
        
        diameter = Math.max(diameter, left + right )
        return Math.max(left ,right) +1
        }

        postOrder(root);
        return diameter

    }



    }

    

