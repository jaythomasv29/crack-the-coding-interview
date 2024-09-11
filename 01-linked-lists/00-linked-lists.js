/**
 * Linked Lists:
 *  A data structure that contains a head, tail, and length property
 *
 * Linked Lists consist of nodes,
 * and each node has a value and a pointer to another node / or null
 *
 * Do not have indexes
 * Connected via nodes with a next pointer
 * Random access is not allowed
 *
 * push() - add to end of linked list O(1)
 * pop() - remove end of linked list O(n) , remove current tail, & must loop from beginning to find the new tail,
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Method to add to end of Linked List
  push(value) {
    const newNode = new Node(value);
    // If the LL is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the LL has a node, set current tail's next to the new node
      this.tail.next = newNode;
      // Update the tail pointer to newNode
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  // Method to traverse through the entire Linked List
  traverse() {
    // If the linked list is empty
    if (!this.head) {
      return undefined;
    }
    // If the linked list has node(s)
    let current = this.head;
    //Begin traversing while there is still nodes
    while (current) {
      console.log(current.value); // Print the value of the node
      current = current.next; // proceed along the linked list
    }
  }
  // Method to remove the last element in a linked list
  pop() {
    // If there is no nodes in the link list
    if (!this.head) {
      return this;
    }
    this.length--;
    // Single node case
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    }
    // Case where this is more than one node in the linked list
    let current = this.head;
    let previous = current;
    //Traverse and find the 2nd to last element in the linked list
    while (current.next) {
      previous = current; // Gets 2nd to last element
      current = current.next; // Gets the last element
    }
    // Set the tail to the second to last element in the linked list
    this.tail = previous;
    return current;
  }
  //Method to remove the first node in the linked list
  shift() {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    // Single node case
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    }
    const removedHead = this.head;
    // move the head pointer to the next node
    this.head = this.head.next;
    return removedHead;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.push(4);
// list.push(5);

// console.log(1, list.pop());
// console.log(2, list.pop());
// console.log(3, list.pop());
list.shift();
list.shift();
list.shift();
console.log(list);
