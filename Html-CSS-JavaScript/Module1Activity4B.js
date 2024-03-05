class Calculator {
    constructor(num){
        this.curr=num||0;
        //Initialize the previous values
        this.pOperand=null;
        this.pOperation=null;
        //Initialize the stack
        this.stack=num?[num]:[];
    }
    calc(string) {
        //Parse the JSON string
        const str = JSON.parse(string);
        //Store the previous values
        this.pOperand=str.operand;
        this.pOperation=str.operation;
        //Add operation
        if(str.operation==="add") {
            this.curr+=str.operand;
        }
        //Subtract operation
        else if(str.operation==="subtract") {
            this.curr-=str.operand;
        }
        //Push into stack
        this.stack.push(this.curr);
        return this.curr;
    }
    undo() {
        // For no previous operation
        if(this.pOperand==null && this.pOperation==null){
            this.curr=0;
        }
        //Undo operation
        else{
            //If operation is subtract then add the previou value
            if(this.pOperation==="subtract"){
                this.curr+=this.pOperand;
            }
            //If operation is add then subtract the previous value
            else if(this.pOperation==="add"){
                this.curr-=this.pOperand;
            }
        }
        //Pop from stack because we did an undo operation
        this.stack.pop();
        return this.curr;
    }
    peek(){
        //If stack is empty
        if(this.stack.length===0){
            return null;
        }
        //Peek the top element
        else{
            return this.stack[this.stack.length-1];
        }
    }
    pop(){
        //If stack is empty
        if(this.stack.length===0){
            return null;
        }
        //Pop from stack
        else{
            return this.stack.pop();
        }
    }
    printMe(){
        //Prints the stack with top at front
        console.log(this.stack.slice().reverse());
    }
    clear(){
        //Set the current value to 0
        this.curr=0;
        //Reset the stack
        this.stack=[this.curr];
    }
}
