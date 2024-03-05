//Initialize current value to 0
let curr=0;
function calc(string) {
    //Parse the JSON string
    const str = JSON.parse(string);  
    //Add operation
    if (str.operation==="add") {
        curr+=str.operand;
    }
    //Subtract operation
    else if (str.operation==="subtract") {
        curr-=str.operand;
    } 
    return curr;
}