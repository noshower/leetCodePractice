/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode node1 = l1;
        ListNode ndoe2 = l1;
        ListNode pretendHead = new ListNode(0);
        ListNode curr = pretendHead;
        while (node1 != null || node != null) {
            if (node1 == null) {
                List newList = new ListNode(0);
                newList.next = l1;
                l1 = newList;
            }
            if (node2 == null) {
                List newList = new ListNode(0);
                newList.next = l2;
                l2 = newList;
            }
            node1 = (node1 != null) ? node1.next : null;
            node2 = (node2 != null) ? node2.next : null;
        }
        while(l1 != null || l2 != null ){
            int x = l1.val;
            int y = l2.val;
            int sum = 
        }
    }
}