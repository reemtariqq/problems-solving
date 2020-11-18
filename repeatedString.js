var s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
var n = 736778906400
console.log(repeatedString(s, n))

function repeatedString(s, n) {
    const numOfRepeats = Math.floor(n / s.length);

    // additional number of strings to get to the limit n
    const remainderString = n % s.length;

    // find number of matches in a string
    let matches = (s.match(/a/g) || []).length;

    // multiply number of matches in a string with number of repeatations
    matches = matches * numOfRepeats;

    // find number of matches in remainder string
    const remainderMatches = (s.substring(0, remainderString).match(/a/g) || []).length;

    // add it up
    return matches + remainderMatches;
}