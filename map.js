/*
let p1=new Promise((resolve)=>{
    let a=parseInt(Math.random()*5000,10);
    console.log("a origin",a)
    setTimeout(()=>{
        resolve(()=>{
            console.log("a=",a)
        })
    },a)
});
let p2=new Promise((resolve)=>{
    let b=parseInt(Math.random()*5000,10);
    console.log("b origin",b);
    setTimeout(()=>{
        resolve(()=>{
            console.log("b=",b)
        })
    },b)
});

let p3=new Promise((resolve)=>{
    let c=parseInt(Math.random()*5000,10);
    console.log("c origin",c);
    setTimeout(()=>{
        resolve(()=>{
            console.log("c=",c)
        })
    },c)
});

let p=Promise.race([p1,p2,p3]);
p.then((f)=>{
    f();
});
*/


function quickSort(arr){
    if (arr.length <= 1) { return arr; }
    let left=[];
    let right=[];
    let pivot=arr[arr.length-1];
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    console.log(left)
    console.log(right)
    return quickSort(left).concat([pivot], quickSort(right));
}


var quickSortE = function(arr) {

    if (arr.length <= 1) { return arr; }

    var pivotIndex = Math.floor(arr.length / 2);

    var pivot = arr.splice(pivotIndex, 1)[0];

    var left = [];

    var right = [];

    for (var i = 0; i < arr.length; i++){

        if (arr[i] < pivot) {

            left.push(arr[i]);

        } else {

            right.push(arr[i]);

        }

    }
    console.log(left);
    console.log(right)

    return quickSort(left).concat([pivot], quickSort(right));

};





console.log('sorted',quickSortE([16,5,11,23,44,55]))
