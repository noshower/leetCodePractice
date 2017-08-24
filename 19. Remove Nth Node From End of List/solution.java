import java.util.Stack;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        Stack<ListNode> stack = new Stack<ListNode>();
        int i = 1;
        while (head != null) {
            ListNode next = head.next;
            head.next = null;
            stack.push(head);
            head = next;
        }
        ListNode cur = null;
        while (stack.isEmpty()) {
            ListNode node = stack.pop();
            if (i != n) {
                node.next = cur;
                cur = node;
            }
            i++;
        }
        return cur;
    }
}