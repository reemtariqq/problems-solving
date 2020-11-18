const logs = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"]
String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}
const numbers = logs.map(log => log.split(' ')).filter(log => {
    return isNumeric(Number(log[1]))
}).map(log => {
    // console.log(log)
    return log.toString().replaceAll(',', ' ', )
    // log.join()
})
const string = logs
    .map(log => log.split(' '))
    .filter(log => !isNumeric(log[1]))
    .sort(Comparator).map(log => {
        // console.log(log)
        return [log.toString()]
        // log.join()
    }).map(log => {
        // console.log(log)
        return log.toString().replaceAll(',', ' ', )
        // log.join()
    })
const result = string.concat(numbers)
return result




function Comparator(a, b) {

    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] === b[1]) {
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
    }
    if (a[2] === b[2]) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
    }
    else {
        return 0
    }

}


function isNumeric(value) {

    const test = /^\d+$/.test(value)
    return /^\d+$/.test(value);
}
