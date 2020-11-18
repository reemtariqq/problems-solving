
var minHeap;
var maxHeap;

function main() {
    // n == how many numbers there will be
    // var n = parseInt(readLine());
    // var a = [];
    // for (var a_i = 0; a_i < n; a_i++) {
    //     a[a_i] = parseInt(readLine());
    // }

    minHeap = new MinHeap();
    maxHeap = new MaxHeap();

    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (var i = 0; i < n; i++) {
        addToHeaps(a[i]);
        balanceHeaps();
        getMedian();
    }
}

function addToHeaps(item) {
    if (!minHeap.size() || item >= minHeap.top()) {
        minHeap.add(item);
    }
    else if (!maxHeap.size() || item <= maxHeap.top()) {
        maxHeap.add(item);
    }
    else {
        minHeap.size() > maxHeap.size() ? maxHeap.add(item) : minHeap.add(item);
    }
}

function balanceHeaps() {
    if (Math.abs(minHeap.size() - maxHeap.size()) > 1) {
        if (minHeap.size() > maxHeap.size()) {
            maxHeap.add(minHeap.removeTop());
        }
        else {
            minHeap.add(maxHeap.removeTop());
        }
    }
}

function getMedian() {
    var median = 0;
    if (Math.abs(minHeap.size() - maxHeap.size()) === 1) {
        if (minHeap.size() > maxHeap.size()) {
            median = minHeap.top();
        }
        else {
            median = maxHeap.top();
        }
    }
    else {
        median = (minHeap.top() + maxHeap.top()) / 2;
    }
    console.log(median.toFixed(1));
}


//heap class
var Heap = function () {
    this._heap = [];
    this._size = 0;
};
Heap.prototype.switchItems = function (pos1, pos2) {
    var _heap = this._heap;
    var temp = _heap[pos1];
    _heap[pos1] = _heap[pos2];
    _heap[pos2] = temp;
};
Heap.prototype.size = function () {
    return this._size;
};
Heap.prototype.top = function () {
    return this._heap[0];
};
Heap.prototype.incrementSize = function () {
    this._size++;
};
Heap.prototype.decrementSize = function () {
    this._size--;
};
Heap.prototype.add = function (item) {
    var _heap = this._heap;
    _heap[this.size()] = item;
    this.incrementSize();
    this.heapifyUp();
};
Heap.prototype.removeTop = function () {
    var _heap = this._heap;
    if (this.size() === 0) {
        return null;
    }
    if (this.size() === 1) {
        this.decrementSize();
        return _heap[0];
    }
    var tempTop = _heap[0];
    _heap[0] = _heap[this.size() - 1];
    this.decrementSize();
    this.heapifyDown();
    return tempTop;
};
Heap.prototype.getLeftChildIndex = function (pos) {
    return pos * 2 + 1;
};
Heap.prototype.getRightChildIndex = function (pos) {
    return pos * 2 + 2;
};
Heap.prototype.getParentIndex = function (pos) {
    return Math.floor((pos - 1) / 2);
};
Heap.prototype.hasLeftChild = function (pos) {
    return this.size() > this.getLeftChildIndex(pos);
};
Heap.prototype.hasRightChild = function (pos) {
    return this.size() > this.getRightChildIndex(pos);
};
Heap.prototype.hasParent = function (pos) {
    return this.getParentIndex(pos) >= 0;
};
Heap.prototype.leftChild = function (pos) {
    return this._heap[this.getLeftChildIndex(pos)];
};
Heap.prototype.rightChild = function (pos) {
    return this._heap[this.getRightChildIndex(pos)];
};
Heap.prototype.parent = function (pos) {
    return this._heap[this.getParentIndex(pos)];
};

var MinHeap = function () {
    Heap.call(this);
};
MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.constructor = MinHeap;
MinHeap.prototype.heapifyUp = function () {
    var pos = this.size() - 1;
    while (this.hasParent(pos)) {
        if (this._heap[pos] >= this.parent(pos)) {
            break;
        }
        else {
            this.switchItems(pos, this.getParentIndex(pos), this.name);
            pos = this.getParentIndex(pos);
        }
    }
};
MinHeap.prototype.heapifyDown = function () {
    var pos = 0;
    var _heap = this._heap;
    while (pos < this.size() && this.hasLeftChild(pos)) {
        var minChildIndex = this.getLeftChildIndex(pos);
        if (this.hasRightChild(pos) && this.rightChild(pos) < _heap[minChildIndex]) {
            minChildIndex = this.getRightChildIndex(pos);
        }
        if (_heap[pos] <= _heap[minChildIndex]) {
            break;
        }
        else {
            this.switchItems(pos, minChildIndex, this.name);
            pos = minChildIndex;
        }
    }
};


var MaxHeap = function () {
    Heap.call(this);
};
MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.constructor = MaxHeap;
MaxHeap.prototype.heapifyUp = function () {
    var pos = this.size() - 1;
    while (this.hasParent(pos)) {
        if (this._heap[pos] <= this.parent(pos)) {
            break;
        }
        else {
            this.switchItems(pos, this.getParentIndex(pos), this.name);
            pos = this.getParentIndex(pos);
        }
    }
};
MaxHeap.prototype.heapifyDown = function () {
    var pos = 0;
    var _heap = this._heap;
    while (pos < this.size() && this.hasLeftChild(pos)) {
        var maxChildIndex = this.getLeftChildIndex(pos);
        if (this.hasRightChild(pos) && this.rightChild(pos) > _heap[maxChildIndex]) {
            maxChildIndex = this.getRightChildIndex(pos);
        }
        if (_heap[pos] >= _heap[maxChildIndex]) {
            break;
        }
        else {
            this.switchItems(pos, maxChildIndex, this.name);
            pos = maxChildIndex;
        }
    }
};

main()