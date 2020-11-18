var s = 'aaaabbcc'
console.log(isValid(s))

function isValid(s) {
    const splittedString = Array.from(new Set(s.split('')))
    var result = new Map()
    for (const letter of splittedString) {
        result.set(letter, getCount(letter, s))
    }

    if (Array.from(result.values()).filter(onlyUnique).length > 2) {
        return 'NO'
    }

    if (Array.from(result.values()).filter(onlyUnique).length === 1) {
        return 'YES'
    }

    else if (Array.from(result.values()).filter(onlyUnique).length == 2) {
        const filtered = Array.from(result.values()).filter(onlyUnique).sort()
        const min = Math.min(...filtered)
        const max = Math.max(...filtered)
        if (max - min == 1) {
            const repeatedinMap = Array.from(result.values()).filter(c => c === min).length === 1
                || Array.from(result.values()).filter(c => c === max).length === 1
            if (repeatedinMap) {
                return 'YES'
            }
            else {
                return 'NO'
            }
        }
    }
    return 'NO'

}

function getCount(letter, str) {
    var regExp = new RegExp(letter, "g");
    return (str.match(regExp) || []).length;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}