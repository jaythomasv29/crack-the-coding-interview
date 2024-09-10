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
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      // 1)  the old tail's next will be the new node
      this.tail.next = newNode;
      // 2) make the new node the new tail pointer
      this.tail = newNode;
      // 3) Increment length
      this.length++;
    }
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);

      if (!current.next) {
        console.log("the last val is " + current.val);
        return current.val.val;
      }
      current = current.next;
    }
  }
  pop() {
    /** 1) If there is no length, return undefined
     *  2) Otherwise, remove the current tail, set it to null
     *  3) Traverse till we reach the new end, make it the tail
     *  4) Decrease the length of the list
     *  5) Return the list with the item popped off
     */
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = null;
      let current = this.head;
      // Get the second last node (current)
      while (current.next.next) {
        current = current.next;
      }
      // Set the second last node's next to null (making it the new tail)
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop();
