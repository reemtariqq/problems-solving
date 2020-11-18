
function merge(left, right) {
    debugger
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    var temp = left.slice().concat(right.slice())
    return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
    debugger
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const testLeft = mergeSort(left)
    const testRight = mergeSort(right)


    return merge(testLeft, testRight);
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(mergeSort(array.slice()))