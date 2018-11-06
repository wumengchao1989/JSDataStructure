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
    console.log("b origin",b)
    setTimeout(()=>{
        resolve(()=>{
            console.log("b=",b)
        })
    },b)
});

let p3=new Promise((resolve)=>{
    let c=parseInt(Math.random()*5000,10);
    console.log("c origin",c)
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

