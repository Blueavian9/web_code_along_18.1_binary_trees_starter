class node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null 
  }
}

function traverse(root) {

  const values = [];
  const queue = []; 
  queue.push(root)

  while(queue.length != 0) {

    const current = queue.shift();

    value.push(current.value);

    if(current.left != null) {
      queue.push(current.left);
    }
    if (current.right != null) {
      queue.push(current.right);
    }
  }
  return values; 
}

// Test cases: 
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head0) // 3, 6, 9

/* 
Plan: 
1. 
2. 
3. 
4.




*/


// Implement a level-order breadth-first traversal for a binary tree using the provided class for a binary tree node.
// the return should be a list of values in the binary tree, based on a level-order (searching left to right at each "level") breadth-first traversal

// Hint: implementing BFS requires a queue data structure.
// For a quick and easy queue implementation:
// const queue = []
// then queue.push(value) to enqueue and queue.shift() to dequeue
