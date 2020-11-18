
const a = 'fcrxzwscanmligyxyvym'
const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

console.log(makeAnagram(a, b))

function makeAnagram(a, b) {
    let result = 0
    var bString = b.slice()
    for (al of a) {
        debugger
        if (!bString.includes(al)) {
            result++
            bString.replace(al, '')
        }
    }
    if (a.length === b.length)
        return result * 2
    else {
        var aString = a.slice()
        for (bl of b) {
            debugger
            if (!aString.includes(bl)) {
                result++
                aString.replace(bl, '')
            }
        }
        return result
    }
}

function makeAnagram(a, b) {
    let shorttestString = a.length < b.length ? a : b
    for (const letter of shorttestString) {
        if (b.includes(letter) && a.includes(letter)) {
            b = b.replace(letter, '')
            a = a.replace(letter, '')
        }
    }
    return a.length + b.length
}