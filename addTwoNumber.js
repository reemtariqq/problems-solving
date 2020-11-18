function ListNode(val) {
    this.val = val;
    this.next = null;
}
var l1 = new ListNode(2)
var l11 = new ListNode(4)
var l111 = new ListNode(3)


var l2 = new ListNode(5)
var l22 = new ListNode(6)
var l222 = new ListNode(4)

l1.next = l11;
l11.next = l111;

l2.next = l22;
l22.next = l222;

var result = new ListNode(0)


addTwoNumbers = (l1, l2) => {
    let carry = 0;
    var curr;
    let p = (curr = new ListNode(0));
    var sum = 0;
    while (l1 || l2) {

        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + carry;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = Math.floor(sum) % 10;
        curr.next = new ListNode(sum);
        curr = curr.next;

    }

    if (carry === 1)
        curr.next = new ListNode(carry);
    return p.next;
};
console.log(addTwoNumbers(l1, l2))


// function printList(listNode) {
//     let result = ''
//     while (listNode != null) {
//         result = result + listNode.val
//         listNode = listNode.next
//     }
//     return result
// }



