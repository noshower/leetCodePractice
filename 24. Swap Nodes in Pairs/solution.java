/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null) {
            return head;
        }
        ListNode cur = head;
        ListNode r = new ListNode(0);
        ListNode curr = r;
        ListNode l1;
        ListNode l2 ;
        while (cur != null && cur.next != null) {
            l1 = cur;
            l2 = cur.next;
            cur = cur.next.next;
            l1.next = null;
            l2.next = null;
            l2.next = l1;
            curr.next = l2;
            curr = l1;
        }
        curr.next = cur;
        return r.next;
    }
}