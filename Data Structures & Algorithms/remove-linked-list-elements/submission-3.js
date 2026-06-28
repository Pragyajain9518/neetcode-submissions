class Solution {
    removeElements(head, val) {
        let dummy = new ListNode(0);
          dummy.next = head;

        let prev = dummy;
        let curr = head;

        while (curr !== null) {
            if (curr.val === val) {
                prev.next = curr.next; 
            } else {
                prev = curr; 
            
            }
                 curr = curr.next; 
       
        }

        return dummy.next;
    }
}
