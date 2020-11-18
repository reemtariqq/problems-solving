class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
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
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    height(root) {
        debugger
        if (root == null) {
            return 0;
        }
        if (root.left == null && root.right == null) {
            return 0;
        }
        return Math.max(this.height(root.left) + 1, this.height(root.right) + 1);
    }

    minHeight(root) {
        debugger
        if (root == null) {
            return 0;
        }
        if (root.left == null && root.right == null) {
            return 0;
        }
        return Math.min(this.height(root.left) + 1, this.height(root.right) + 1);
    }
    checkHeight(root) {
        if (!root) return -1;

        const leftHeight = this.checkHeight(root.left);
        if (leftHeight === -Infinity) return -Infinity;

        const rightHeight = this.checkHeight(root.right);
        if (rightHeight === -Infinity) return -Infinity;

        const heightDiff = Math.abs(leftHeight - rightHeight);
        return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
    }
    checkBalanced(root) {
        return this.checkHeight(root) !== -Infinity;
    }
    printLevelOrder(node) {
        var h = this.height(node);
        var i;
        for (var i = 0; i <= h; i++) {
            console.log(i)
            this.printGivenLevel(node, i);
        }

    }
    printGivenLevel(node, level) {
        if (node == null)
            return;
        if (level == 1)
            console.log(node.data + " ");
        else if (level > 1) {
            this.printGivenLevel(node.left, level - 1);
            this.printGivenLevel(node.right, level - 1);
        }
    }

    levelOrderTraversal(node) {
        var nodes = []
        if (node === null) {
            return null
        }
        while (nodes.length > 0) {
            var n = queue.shift();
            nodes.push(n.data);
            if (n.left !== null) { queue.push(n.left); }
            if (n.right !== null) { queue.push(n.right); }
            for (let i = 0; i < nodes.length; i++) {
                console.log(nodes[i].data)
            }
        }
    }


    bfs(node) {

    }

    dfs(node) {

    }

}

var bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);


// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// bst.insert(25);
// bst.insert(10);
// bst.insert(7);
// bst.insert(22);
// bst.insert(17);
// bst.insert(13);
// bst.insert(5);
// bst.insert(9);
// bst.insert(27);
// bst.inorder(bst.root)
// bst.preorder(bst.root)
// bst.postorder(bst.root)
bst.levelOrderTraversal(bst.root)
