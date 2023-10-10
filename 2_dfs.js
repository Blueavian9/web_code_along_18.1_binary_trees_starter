class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  // Implement
  
}

// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)); // 3, 6, 9

// Implement an in-order depth-first traversal for a binary tree using the provided class for a binary tree node.
// the return should be a list of values in the binary tree, based on an in-order (left, current, right) depth-first traversal

// Hint: you can implement DFS either with recursion (using the system call stack) or by manually declaring your own stack data structure.
// For a quick and easy stack implementation:
// const stack = []
// then stack.push(value) to push and stack.pop() to pop
