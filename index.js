/*
import BinaryTree from './BinaryTree';
let bTree=new BinaryTree(0);
for(let i=0;i<1000;i++){
    bTree.insertBST(Math.random()*3433)
}
bTree.findMax(bTree.root);
document.write(bTree.max);*/
let impl={
    helloWorld:function(){
        console.log("hello world");
    }
};

function test(){
    this.helloWorld();
}
var NODE_ENV = process.env.NODE_ENV;
var invariant = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }

    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                'for the full error message and additional helpful warnings.'
            );
        } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
                format.replace(/%s/g, function() { return args[argIndex++]; })
            );
            error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
invariant(false,"this is %s an error %s","asdd","test b");
Object.assign(test.prototype,impl)

let a=new test();
