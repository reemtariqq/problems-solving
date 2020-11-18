var string = 'aabbccddeefghi'


function isValid(str) {

    var result = new Map()
    for (var char of str) {
        if (result.get(char)) {
            result.set(char, result.get(char) + 1)
        }
        else {
            result.set(char, 1)
        }
        // result.set(char, result.get(char) || 0 + 1)
    }


    console.log([...Array.from(result.entries())])
    if (allEqual([...Array.from(result.values())])) {
        return 'YES'
    }

    const maxOccur = getMaxOccurrence(Array.from(result.values()))
    for (let [key, value] of result) {
        if (value === maxOccur) {
            result.delete(key)
        }
    }
    if (result.size === 1 && (Math.abs(result.values().next().value - maxOccur) === 1 || result.values().next().value === 1)) {
        return 'YES'
    }
    else {
        return 'NO'
    }

}



function allEqual(arr) {
    return new Set(arr).size == 1;
}

function getMaxOccurrence(a) {
    var o = {}, mC = 0, mV, m;
    for (var i = 0, iL = a.length; i < iL; i++) {
        if (a.hasOwnProperty(i)) {
            m = a[i];
            o.hasOwnProperty(m) ? ++o[m] : o[m] = 1;
            if (o[m] > mC) mC = o[m], mV = m;
        }
    }
    return mV;
}

console.log(isValid(string))