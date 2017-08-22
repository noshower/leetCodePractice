/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var r = new ListNode(0);
    var carry = 0;
    var cur = r;
    while (l1 !== null || l2 !== null) {
        var x = (l1 != null) ? l1.val : null;
        var y = (l2 != null) ? l2.val : null;
        var sum = x + y + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        l1 = (l1 !== null) ? l1.next : null;
        l2 = (l2 !== null) ? l2.next : null;
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return r.next;
};