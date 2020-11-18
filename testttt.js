function getMedians(arr) {
    var highers = new MinHeap()
    var lowers = new MaxHeap()
    var medians = []
    for (let i = 0; i < arr.length; i++) {
        debugger
        var number = arr[i]
        addNumber(number, lowers, highers)
        rebalance(lowers, highers)
        medians[i] = getMedian(lowers, highers).toFixed(1)
    }
    return medians
}

function addNumber(number, lowers, highers) {
    debugger
    if (lowers.size === 0 || number < lowers.peek()) {
        lowers.add(number)
    }
    else {
        highers.add(number)
    }
}

function rebalance(lowers, highers) {
    debugger
    var biggerHeap = lowers.size > highers.size ? lowers : highers
    var smallerHeap = lowers.size > highers.size ? highers : lowers
    if (biggerHeap.size - smallerHeap.size >= 2) {
        smallerHeap.add(biggerHeap.poll())
    }
}

function getMedian(lowers, highers) {
    var biggerHeap = lowers.size > highers.size ? lowers : highers
    var smallerHeap = lowers.size > highers.size ? highers : lowers
    if (biggerHeap.size === smallerHeap.size) {
        return (biggerHeap.peek() + smallerHeap.peek()) / 2
    }
    else {
        return biggerHeap.peek()
    }
}
