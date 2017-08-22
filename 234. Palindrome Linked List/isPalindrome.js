/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next === null) {
        return true;
    }
    var reverse = function (head) {
        var prev = null;
        var curr = head;
        while (curr !== null) {
            var nodes = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nodes;
        }
        return prev;
    }
    var slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;
    while (slow !== null) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};