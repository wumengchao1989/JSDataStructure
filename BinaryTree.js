function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
}

function BinaryTree(rootValue) {
    this.root = new TreeNode(rootValue);
    this.queue = [this.root];
    this.max=0;
    this.min=0;
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
    if(value<this.root.value){
        insertLeft(this.root,value)
    }else{
        insertRight(this.root,value)
    }
};

BinaryTree.prototype.findMax=function(node){
    if(node.right){
        this.findMax(node.right)
    }else{
        this.max=node.value
    }
};
BinaryTree.prototype.findMin=function(node){
    if(node.left){
        this.findMin(node.left)
    }else{
        this.min=node.value
    }
};

export default BinaryTree;

