// Stacks

// functions: push, pop, peek, length

// let letters = []; // this is the stack

// let word = "racecar"; // palindrome

// let reverseWord = ""; //empty string

// //put letters of word into stack
// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// //pop off the stack in reverse order
// for (let i = 0; i < word.length; i++) {
//   reverseWord += letters.pop();
// }

// if (reverseWord === word) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + " is not a palindrome.");
// }

// Creates a stack

let Stack = function () {
  this.count = 0; // items in the stack
  this.storage = {}; // empty object

  // *Methods*

  // Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // Returns the value at the end of the stack without removing it like pop
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // Will log 2 since theirs now 2 elements pushed into myStack
console.log(myStack.pop()); // Will show 2 popped off
console.log(myStack.peek()); // Will show 1 since only one element remains in myStack
myStack.push("freeCodeCamp");
console.log(myStack.size()); // Will now show 2 since freeCodeCamp has been added on
console.log(myStack.peek()); // Will show freeCodeCamp
console.log(myStack.pop()); // Will show freeCodeCamp being popped off myStack
console.log(myStack.peek()); // Will show 1 given only element left in myStack
