/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    private void deleteNode(ListNode nodes){
        nodes.next = nodes.next.next;
    }
    public ListNode deleteDuplicates(ListNode head) {
        ListNode curr = head;
        while(curr.next !=null){
            if(curr.next.val == curr.val){
                deleteNode(curr);
            }
            curr = head.next;
        }
        return head;
    }
}