/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var fakeHead = {
        val:-1,
        next:head
    };
    var curr = head,prev = fakeHead;
    while(curr!=null){
        if(curr.val == val){
            prev.next = curr.next;
        }else{
            prev = prev.next;
        }
        curr = curr.next;
    }
    return fakeHead.next;
};