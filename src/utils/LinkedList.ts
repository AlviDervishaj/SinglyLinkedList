export class Node<T> {
  _value: T;
  _next: Node<T> | null;
  constructor(value: T, next: Node<T> | null) {
    this._value = value;
    this._next = next;
  }
  public get value() {
    return this._value;
  }
  public set value(value: T) {
    this._value = value;
  }
  public get next() {
    return this._next;
  }
  public set next(next: Node<T> | null) {
    this._next = next;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = -1;
  }

  // add a node to the end of the list
  push(value: T) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    this.tail!._next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // remove a node from the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current!._next) {
      newTail = current;
      current = current!._next;
    }
    this.tail = newTail;
    this.tail!._next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = -1;
    }
    return current;
  }

  // remove a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead!._next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.length = -1;
    }
    return currentHead;
  }

  // add a node to the beginning of the list
  unshift(value: T) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    newNode._next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // get the value of a node at a given index
  get(index: number) {
    if (index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index && current) {
      current = current._next;
      counter++;
    }
    return current;
  }
  // set the value of a node at a given index
  set(index: number, value: T) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  // insert a node at a given index
  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    const newNode = new Node(value, null);
    const previous = this.get(index - 1);
    if (!previous) return false;
    newNode._next = previous._next;
    previous._next = newNode;
    this.length++;
    return true;
  }

  // remove a node at a given index
  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const previous = this.get(index - 1);
    if (!previous) return undefined;
    const removed = previous._next;
    previous._next = removed!._next;
    this.length--;
    return removed;
  }

  // peek the first node
  peek() {
    return this.head;
  }

  // peek the last node
  peekLast() {
    return this.tail;
  }

  // check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // convert to Array
  toArray() {
    let current = this.head;
    const arr = new Array<Node<T>>(this.length);
    while (current) {
      arr.push(current);
      current = current._next;
    }
    return arr;
  }
  


  // reverse the list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next: Node<T> | null;
    for (let i = 0; i < this.length; i++) {
      next = node!._next;
      node!._next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}
