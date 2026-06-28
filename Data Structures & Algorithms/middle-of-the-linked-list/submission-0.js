class Solution {
    middleNode(head) {
       let dummy = new ListNode(0);
      let slow = head
      let fast = head 
      while (fast != null && fast.next != null){
           slow = slow.next
            fast = fast.next.next 
               

      }
     
         return slow 
           
    }
}

