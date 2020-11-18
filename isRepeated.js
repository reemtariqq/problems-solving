const string = 'abcabcc'

function isRepeated(str) {

    var nonRpeated = new Set(Array.from(string))
    return nonRpeated.length === str.length
}

console.log(isRepeated(string))