const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"]
const searchWord = "mouse"
var searchKeyword = ''
let result = [[]]
for (var x = 0; x < searchWord.length; x++) {
    debugger
    searchKeyword = searchKeyword.concat(searchWord.charAt(x))
    searchKeyword && result.push(products.filter(filter => filter.startsWith(searchKeyword)).sort().slice(0, 3))
}
