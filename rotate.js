var matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
// function rotate(matrix) {
//     const n = matrix.length;
//     const x = Math.floor(n / 2);
//     const y = n - 1;
//     for (let i = 0; i < x; i++) {
//         for (let j = i; j < y - i; j++) {
//             k = matrix[i][j];
//             matrix[i][j] = matrix[y - j][i];
//             matrix[y - j][i] = matrix[y - i][y - j];
//             matrix[y - i][y - j] = matrix[j][y - i]
//             matrix[j][y - i] = k
//         }
//     }
//     return matrix
// }

function reemRotate(matrix) {
    var n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            var temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix.map(arr => arr.reverse())
}

console.log(reemRotate(matrix))