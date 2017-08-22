/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   var prev = null;
    var curr = head;
    while(curr !== null){
        var nextTemp = curr.next;
        curr.next= prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};