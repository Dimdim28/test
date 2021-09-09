
const readline = require('readline-sync');



const sum= function(x,y){
    return Number(x)+Number(y); 
}
const sub= function(x,y){
    return Number(x)-Number(y); 
}
const max= function(x,y){
    if(x>y){
        return x;
    }
    else if(x==y){
        console.log("a=b");
    }
    else{
        return y;
    }
}


let a =readline.question("введите 1 число ");
let b =readline.question("введите 2 число ");
console.log(`sum a,b =   ${sum(a,b)}`);
console.log(`max(a,b)= ${max(a,b)}`);
console.log(`sub(a,b)= ${sub(a,b)}`);

