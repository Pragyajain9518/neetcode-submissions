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
     * @return {ListNode}
     */
    reverseList(head) {
      let array = []
      let current = head
      while (current) {
        array.push(current.val);
        current = current.next;
    }

    let reverseArray = array.reverse()
        console.log(array)


      let dummy = new ListNode (-1)
      let node = dummy

      for (let i = 0; i < reverseArray.length; i++){
         node.next = new ListNode(reverseArray[i]);
         node = node.next;
      }

      return dummy.next
    }
}
