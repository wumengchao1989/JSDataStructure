import BinaryTree from './BinaryTree';
let bTree=new BinaryTree(0);
for(let i=0;i<1000;i++){
    bTree.insertBST(Math.random()*3433)
}
bTree.findMax(bTree.root);
document.write(bTree.max);