class Stack {
    constructor() {
        this.top = -1
        this.items = []
    }

    push(item) {
        this.items.push(item)
        this.top++
    }

    pop() {
        if (this.top !== -1) {
            this.top--
            return this.items.pop()
        }
        else {
            console.log('Stack is empty')
        }
    }

    isEmpty() {
        return this.top === -1
    }
}

const parantheses = new Map()
parantheses.set('{', '}')
parantheses.set('(', ')')
parantheses.set('[', ']')

let strinToBeEvaluated = '{[()]}}'
console.log(isBalanced(strinToBeEvaluated))

function isOpenTerm(char) {
    return Array.from(parantheses.keys()).includes(char)
}

function matches(openTerm, closeTerm) {
    return parantheses.get(openTerm) === closeTerm
}

function isBalanced(strinToBeEvaluated) {
    var result = new Stack()
    var splittedString = strinToBeEvaluated.split('')
    for (let i = 0; i < splittedString.length; i++) {
        if (isOpenTerm(splittedString[i])) {
            result.push(splittedString[i])
        }
        else if (result.isEmpty() || !matches(result.pop(), splittedString[i])) {
            return false
        }

    }
    return result.isEmpty()
}