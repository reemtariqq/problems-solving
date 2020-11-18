function TrieNode(key) {
    // the "key" value will be the character in sequence
    this.key = key;

    // we keep a reference to parent
    this.parent = null;

    // we have hash of children
    this.children = {};

    // check to see if the node is at the end
    this.end = false;
}

function Trie() {
    this.root = new TrieNode(null);
}

Trie.prototype.insert = function (word) {
    debugger
    var node = this.root; // we start at the root 😬

    // for every character in the word
    for (var i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (!node.children[word[i]]) {
            // if it doesn't exist, we then create it.
            node.children[word[i]] = new TrieNode(word[i]);

            // we also assign the parent to the child node.
            node.children[word[i]].parent = node;
        }

        // proceed to the next depth in the trie.
        node = node.children[word[i]];

        // finally, we check to see if it's the last word.
        if (i == word.length - 1) {
            // if it is, we set the end flag to true.
            node.end = true;
        }
    }
};

Trie.prototype.contains = function (word) {
    var node = this.root;

    // for every character in the word
    for (var i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (node.children[word[i]]) {
            // if it exists, proceed to the next depth of the trie.
            node = node.children[word[i]];
        } else {
            // doesn't exist, return false since it's not a valid word.
            return false;
        }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end;
};

function findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
        arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (var child in node.children) {
        findAllWords(node.children[child], arr);
    }
}


// insert few values




console.log(trie.contains("helium"));  // true


function contacts(queries) {
    var trie = new Trie();
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 'add') {
            trie.insert(queries[i][1])
        }
        else if (queries[i][0] === 'find') {
            console.log(trie.contains(queries[i][1]))
        }
    }
}