class MinHeap {
    constructor() {
        this.size = 0
        this.items = []
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size
    }

    hasRightChild(index) {
        debugger
        return this.getRightChildIndex(index) < this.size
    }

    hasParent(index) {
        debugger
        return this.getParentIndex(index) >= 0
    }

    leftChild(index) {
        debugger
        return this.items[this.getLeftChildIndex(index)]
    }

    rightChild(index) {
        debugger
        return this.items[this.getRightChildIndex(index)]
    }

    parent(index) {
        debugger
        return this.items[this.getParentIndex(index)]
    }

    swap(indexOne, indexTwo) {
        debugger
        var temp = this.items[indexOne]
        this.items[indexOne] = this.items[indexTwo]
        this.items[indexTwo] = temp
    }

    peek() {
        debugger
        if (this.size === 0) return null
        return this.items[0]
    }

    poll() {
        debugger
        if (this.size === 0) return null
        var item = this.items[0]
        this.items[0] = this.items[this.items.length - 1]
        this.size--;
        this.heapifyDown()
        return item
    }

    add(item) {
        debugger
        this.items[this.size] = item
        this.size++
        this.heapifyUp()
    }

    heapifyUp() {
        debugger
        var index = this.size - 1
        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    heapifyDown() {
        debugger
        var index = 0
        while (this.hasLeftChild(index)) {
            var smallerChildIndex = this.getLeftChildIndex(index)
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index)
            }

            if (this.items[index] < this.items[smallerChildIndex]) {
                break;
            }
            else {
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex
        }
    }

}

