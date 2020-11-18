function insertNodeAtTail(head, data) {
    var currentNode = head
    const newNode = new Node(data)
    if (currentNode === null) {
        return newNode
    }
    else if (head.next === null) {
        head.next = newNode
    }
    else {
        while (currentNode.next !== null) {
            currentNode.next = currentNode.next.next
        }
        currentNode.next = newNode
        return head
    }

}