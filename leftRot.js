
var a = [1, 2, 3, 4, 5]
var d = 4
console.log(rotLeft(a, d))
function rotLeft(a, d) {

    for (var i = 0; i < d; i++) {
        var first = a.shift()
        a.push(first)
    }
    return a
}
