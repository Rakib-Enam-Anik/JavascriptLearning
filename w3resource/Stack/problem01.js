/*
Write a JavaScript program to implement a stack with push and pop operations. 
Find the top element of the stack and check if it is empty or not.
*/

class Stack{
    constructor(){

    }

    //Pushes an element onto the stack
    push(element){
        this.items.push(element);
    }

    //Removes the top element from the stack and returns it

    pop(){
        if (this.items.length == 0)
           return "Underflow";
        return this.items.pop();
    }

    //Returns the top element of the stack

    peek(){
        if(this.items.length == 0)
        return "No elements in Stack";
        return this.items[this.items.length -1 ];
    }
   //Checks if the stack is empty
    isEmpty(){
        return this.items.length == 0;
    }
    //Returns the number of elements in the stack
    size(){
        return this.items.length;
    }
    displayStack(stack){
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i < stack.items.length; i++)
        str +=stack.items[i] + "";
        return str.trim();
    }
}

console.log("Initialize a stack:")
let stack = new stack();
console.log("Is the stack empty?");
console.log(stack.isEmpty()); //true
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(5);
console.log(stack.displayStack(stack));