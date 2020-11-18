const files = [1, 2, 3, 4]
const sortedFiles = files.filter(file => file > 0).sort(function (a, b) { return b - a });
let finalSum = 0
while (sortedFiles && sortedFiles.length !== 1) {

    finalSum = finalSum + sumAndMerge(sortedFiles)
    console.log(finalSum)
}

function sumAndMerge(arr) {

    let sum = 0
    if (arr.length === 1) {
        return arr[0]
    }

    sum = arr[arr.length - 1] + arr[arr.length - 2]
    arr.pop()
    arr[arr.length - 1] = sum
    return sum
}

