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
    isPalindrome(head) {

      let array = []
      let current = head
      while (current) {
        array.push(current.val);
        current = current.next;
    }

console.log (array)
      
    let i = 0 
    let j = array.length - 1

    
            while (i < j) {
    // while (i < j) i++;
    // while (i < j) j--;

    if (array[i] != array[j]) {
      return false;
    }

  i++;
    j--;
  }
 return true;
        
    }
}
