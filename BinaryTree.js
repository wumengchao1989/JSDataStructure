function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
}


function BinaryTree(rootValue) {
    this.root = new TreeNode(rootValue);
    this.queue = [this.root];
    this.max = 0;
    this.min = 0;
}

BinaryTree.prototype.add = function (value) {
    let node = this.queue.shift();
    if (!node.left) {
        node.left = new TreeNode(value)
    } else if (!node.right) {
        node.right = new TreeNode(value);
    }
    if (node.left && node.right) {
        this.queue.push(node.left);
        this.queue.push(node.right);
    } else {
        this.queue.push(node)
    }
};

BinaryTree.prototype.insertBST = function (value) {
    function insertLeft(node, value) {
        if (!node.left) {
            node.left = new TreeNode(value)
        } else {
            if (node.left.value > value) {
                insertLeft(node.left, value)
            } else {
                insertRight(node.left, value)
            }
        }
    }

    function insertRight(node, value) {
        if (!node.right) {
            node.right = new TreeNode(value)
        } else {
            if (node.right.value > value) {
                insertLeft(node.right, value)
            } else {
                insertRight(node.right, value)
            }
        }
    }

    if (value < this.root.value) {
        insertLeft(this.root, value)
    } else {
        insertRight(this.root, value)
    }
};

BinaryTree.prototype.findMax = function (node) {
    if (node.right) {
        this.findMax(node.right)
    } else {
        this.max = node.value
    }
};

BinaryTree.prototype.findMin = function (node) {
    if (node.left) {
        this.findMin(node.left)
    } else {
        this.min = node.value
    }
};

BinaryTree.prototype.preorderTraversal = function (node) {
    if(node){
        console.log("preOrder", node.value);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }

};

BinaryTree.prototype.postorderTraversal = function (node) {
    if(node) {
        console.log("postOrder", node.value);
        this.postorderTraversal(node.right);
        this.postorderTraversal(node.left);
    }

};

BinaryTree.prototype.inorderTraversal = function (node) {
    if(node){
        this.inorderTraversal(node.left);
        console.log("inOrder", node.value);
        this.inorderTraversal(node.right);
    }

};

BinaryTree.prototype.levelTraversal = function () {
    if (this.queue.length > 0) {
        let node = this.queue.shift();
        console.log("level", node.value);
        if (node.left) {
            this.queue.push(node.left);
        }
        if (node.right) {
            this.queue.push(node.right);
        }
        this.levelTraversal();
    }
};
let a = [
    23,
    234, 12, 56, 21, 98, 99, 123, 43, 46, 78, 89, 11, 8, 89, 100, 123
];


let bTree = new BinaryTree(32);
console.time("insert");
for (let i = 0; i < a.length; i++) {
    bTree.insertBST(a[i]);
}


/*console.timeEnd("insert");
console.time("find");
bTree.findMax(bTree.root);
console.timeEnd("find");*/
bTree.levelTraversal();
bTree.inorderTraversal(bTree.root);
bTree.preorderTraversal(bTree.root);

/*console.log(bTree.max);
console.log(bTree.min);*/



