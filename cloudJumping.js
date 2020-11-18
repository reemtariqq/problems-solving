var c = [0, 0, 1, 0, 0, 1, 0]
console.log(jumpingOnClouds(c))

function jumpingOnClouds(c) {
    var jumpsNo = 0
    for (var i = 0; i < c.length; i++) {
        if (c[i + 2] === 0) {
            jumpsNo++
            i++
        }
        else if (c[i + 1] === 0) {
            jumpsNo++
        }
    }
    return jumpsNo
}
