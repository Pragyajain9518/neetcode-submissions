
class Solution {
    isSubtree(root, subRoot) {

                function postOrder(node1, node2) {
      
                 if (node1 === null && node2 === null)
                return true;
                 if (node1 === null || node2 === null)
                 return false;
                 if (node1.val !== node2.val )
                return false
                 
                     return postOrder(node1.left, node2.left)
               && postOrder(node1.right, node2.right)
        
              }
                 if (root === null)    
                return false 

                if (postOrder(root, subRoot))
               return true;

               return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right,subRoot)

            }
          }
