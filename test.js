var strStr = function(haystack, needle) {
    const needleLen=needle.length;
    if(haystack===needle){
        return 0
    }
    for(let i=0;i<haystack.length-needleLen+1;i++){
        let windowStr=haystack.substring(i,i+needleLen);
        console.log(windowStr)
        if(windowStr===needle){
            return i
        }
    }
    return -1;
};

console.log(strStr("hello","lo"));

let str="hello";
str[2]="ssssss";
console.log(str)