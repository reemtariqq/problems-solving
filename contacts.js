class Node {
    constructor(char) {
        this.char = char;
        this.children = []; // track all following characters
        this.ends = 0; // keep running total of # of words this char was used in
    }

    findOrCreateChild(char) {
        this.ends++; // increment running count
        return this.findChild(char) || this.createChild(char);
    }

    createChild(char) {
        const newChild = new Node(char);
        this.children.push(newChild);
        return newChild;
    }

    findChild(char) {
        // returns undefined if char not found in children
        return this.children.find(node => node.char === char);
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    add(word) {
        debugger
        let currentNode = this.root;
        for (const char of word) {
            currentNode = currentNode.findOrCreateChild(char);
        }
        // KEY FOR 1 TEST
        // Important to keep track of end of words (for single letter "words")
        // Also just good practice
        currentNode.findOrCreateChild(Trie.END_CHARACTER);
    }

    getMatchCount(partial) {
        debugger
        let currentNode = this.root;
        for (const char of partial) {
            const childNode = currentNode.findChild(char);
            if (!childNode) return 0; // stop short if any part of partial not found
            currentNode = childNode;
        }
        return currentNode.ends; // returns the established count
    }
}

Trie.END_CHARACTER = "*";

function contacts(queries) {
    const store = new Trie();
    const output = [];
    for (const [command, string] of queries) {
        if (command === "add") {
            store.add(string); // O(N*k)
        } else {
            output.push(store.getMatchCount(string)); // O(N*k*1)
        }
    }
    return output; // O(N * k) ~> O(N)
}




var queries = [['add', 'hack'], ['add', 'hackerrank'], ['find', 'hac'], ['find', 'reem']]
console.log(contacts(queries))