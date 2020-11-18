const matrix = [[1, 0, 0, 0, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 1],
[0, 0, 0, 1, 0],
[0, 0, 0, 0, 1]]


let updateMatrix = [[]]


let hours = 0
console.log(calculateHours(matrix))
function turnZeroToOne(element, elementX, elementY, matrix) {
    debugger
    if (element === 1) {
        return 1
    }
    else {
        let test = element == 1 ||
            validateItem(elementX, elementY - 1, matrix) === 1 ||
            validateItem(elementX, elementY + 1, matrix) === 1 ||
            validateItem(elementX - 1, elementY, matrix) === 1 ||
            validateItem(elementX + 1, elementY, matrix) === 1

        return test
    }
}

function calculateHours(matrix) {
    updateMatrix = matrix.slice()
    while (checkIfDone(matrix.slice()) !== 1) {

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                debugger
                // console.log(i, j, matrix[i][j])
                updateMatrix[i][j] = turnZeroToOne(matrix[i][j], i, j, matrix)
            }
        }
        hours++
        // matrix = updateMatrix
        // printMatrix(matrix)
    }
    return hours
}

function checkIfDone(matrix) {
    return matrix.map(rows => {

        if (rows.includes(0)) {
            return 0
        }
        else {
            return 1
        }
    }).reduce((acc, item) => acc && item)
}

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j])
        }
    }
}

function validateItem(elementX, elementY, matrix) {
    debugger
    if (elementX === -1 || elementX === matrix.length || elementY === -1 || elementY === matrix[0].length) {
        return 0
    }
    else {
        return matrix[elementX][elementY]
    }
}