var s = 'aaaa'
var n = 10
console.log(repeatedString(s, n))

function repeatedString(s, n) {
    if (s.length === 1) {
        if (s === 'a') {
            return n
        }
        else {
            return 0
        }
    }

    else {
        debugger
        var aCount = s.split('').filter(c => c === 'a').length
        var noRepeating = Math.floor(n / s.length)
        var reminder = n % s.length
        var reminderString = s.substring(0, reminder).split('').filter(c => c === 'a').length
        var result = aCount * noRepeating + reminderString
        return result
    }
}
