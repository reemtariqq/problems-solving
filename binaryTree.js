class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
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

    insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            }
            else {
                this.insertNode(currentNode.left, newNode)
            }
        }
        else if (newNode.data > currentNode.data) {
            if (currentNode.right === null) {
                currentNode.right = newNode
            }
            else {
                this.insertNode(currentNode.right, newNode)
            }
        }
    }

    inOrder(node) {
        if (node === null) {
            return null
        }
        else {

            this.levelOrder(node.left);
            console.log(node.data);
            this.levelOrder(node.right);

        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.preorder(node.left);
            this.preorder(node.right);
            console.log(node.data);
        }
    }

    minimumDepth(root) {
        // Corner case. Should never be hit unless the code is 
        // called on root = NULL 
        if (root == null)
            return 0;

        // Base case : Leaf Node. This accounts for height = 1. 
        if (root.left == null && root.right == null)
            return 1;

        // If left subtree is NULL, recur for right subtree 
        if (root.left == null)
            return this.minimumDepth(root.right) + 1;

        // If right subtree is NULL, recur for left subtree 
        if (root.right == null)
            return this.minimumDepth(root.left) + 1;

        return Math.min(this.minimumDepth(root.left),
            this.minimumDepth(root.right)) + 1;
    }

    levelOrder = function (root) {
        debugger
        if (!root) return [];
        var array = [];
        search(root, 1);

        function search(root, level) {
            debugger
            if (root) {
                if (array.length < level) {
                    array.push([]);
                }
                var arr = array[level - 1];
                arr.push(root.data);
                search(root.left, level + 1);
                search(root.right, level + 1);
            } else {
                return;
            }
        }

        return array;
    };

}

var bst = new BinaryTree()
bst.insert(1)
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(2)
bst.insert(3)
bst.insert(5)


bst.levelOrder(bst.root).map(i => console.log(i))


