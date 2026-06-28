/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
      let current = head 
    const same = new Set();
while (current != null){
      if (same.has(current)){
        return true
      }else{
        same.add(current)
        current = current.next
      }
}
      return false
    }
    
}
