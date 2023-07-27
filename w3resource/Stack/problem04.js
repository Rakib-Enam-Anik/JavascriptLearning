//Write a JavaScript program to reverse the elements of a given stack.

class Stack {
    constructor(){
        this.items = [];
    }

    //Pushes an element onto the stack
    push(element){
        this.items.push(element);
    }

    //Remove the top element from the stack and return it
    pop(){
        if(this.items.length == 0)
         return "Underflow";
        return this.items.pop();
    }

    //Checks if the stack is empty
    isEmpty(){
        return this.items.length == 0;
    }
    //Returns the top element of the stack 
    peek(){
        if(this.items.length == 0)
        return "No elements in Stack";
     return this.items[this.items.length -1];
    }

    displayStack(stack){
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i< stack.items.length; i++)
        str += stack.items[i] + "";
    return str.trim();
    }

    reverse_stack(stack){
        let temStack = new Stack();

        //Pop each element from the original stack and push it onto the stack
        while (!stack.isEmpty()){
            tempStack.push(stack.pop());
        }
        //Return the tempStack containing the reversed elements
        return tempStack;
    }
}

console.log("Initialize a stack:")
let stack = new Stack();
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(5);
console.log(stack.displayStack(stack));
let reversedStack = stack.reverse_stack(stack);
console.log("The elements of the stack in reverse order:")
console.log(stack.displayStack(reversedStack));