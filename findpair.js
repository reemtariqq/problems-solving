const nums = [20, 50, 40, 25, 30, 10]
const target = 90

const sortedArray = nums.sort(function (a, b) { return b - a });
result = [[]]

sortedArray.forEach(num => {
    sortedArray.forEach(anotherNum => {
        if (anotherNum + num === target - 30 && !result.includes(num) && !result.includes(anotherNum)) {
            result.push([num, anotherNum])
        }
    })
})
result = result.sort(function (a, b) { return b[0] - a[0] });

console.log(result.map(item => console.log(item[0], item[1])))