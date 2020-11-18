class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else if (newNode.data > node.data) {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.postorder(node.left)
            this.postorder(node.right)
        }
    }
}

var bt = new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.insert(7)
bt.insert(8)
bt.inorder(bt.root)


