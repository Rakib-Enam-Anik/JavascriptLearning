//Write a JavaScript program to sort the elements of a given stack in descending order.

class Stack {
    constructor() {
        this.items = [];
    }

    //Pushes an element onto the stack
    push(element){
        this.items.push(element);
    }

    //Removes the top element from the stack and returns it
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
     return this.items[this.items.length - 1];
    }

    displayStack(stack){
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i < stack.itms.length; i++)
        str += stack.items[i] + "";
        return str.trim();
    }

    sort_Stack(stack){
        //Create a temporay stack to hold sorted elements
        let temStack = new Stack();

    while (!stack.isEmpty()){
        //Pop the top element from the original stack
        let currentElement = stack.pop();

        //Move all elements greater than eurrentElement from tempStack back to stack

        while(!tempStack.isEmpty() && tempStack.peek() > currentElement){
            stack.push(tempStack.pop());
        }
        //Push the currentElement onto the temStack
        tempStack.push(currentElement);

    }
    //Move all elements from tempStack back to stack
    while (!tempStack.isEmpty()){
        stack.push(tempStack.pop());
    }
    return stack;
}
}

console.log("Initialize a stack:")
let stack = new Stack();
console.log("Input some elements o the stack:")
stack.push(1);
stack.push(4);
console.log(stack.displayStack(stack));
stack.sort_Stack(stack);
console.log("Sort the elements of the stack in desceding order:")
console.log(stack.displayStack(stack));
console.log("Remove one element and insert two elements:")
stack.pop();
stack.push(0);
stack.push(8);
console.log(stack.displayStack(stack));
stack.sort_Stack(stack);
console.log("Sort the elements of the stack in descending order:")
console.log(stack.displayStack(stack));