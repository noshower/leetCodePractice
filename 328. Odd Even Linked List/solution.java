
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        ListNode evenList =new ListNode(0);
        ListNode oddList =new ListNode(0);
        ListNode cur = head;
        ListNode curEven = evenList, curOdd = oddList;
        Boolean isOdd =true;
        while (cur != null) {
            ListNode r = cur.next;
            if (!isOdd) {
                curEven.next = cur;
                curEven = curEven.next;
                curEven.next = null;
            } else {
                curOdd.next = cur;
                curOdd = curOdd.next;
                curOdd.next = null;
            }
            isOdd = !isOdd;
            cur = r;
        }
        curOdd.next =evenList.next;
        return oddList.next;
    }
}