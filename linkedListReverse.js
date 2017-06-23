// reverse a linked list
// A lot of the work here is just building the classes,
// and creating a linked list. 
// We build a node class, then we build a list class.
// the addValue method is used to create the linked list. 
// All the reversing is done in the reverse method. 
// 
"use strict";
class Node {

	constructor(value) {
		this.value = value;
		this.next = null;
	}

	getNext() {
		return this.next;
	}
	setNext(n) {
		this.next = n;
	}

	getValue() {
		return this.value;
	}

	setValue(value) {
		this.value = value;
	}
}

class List {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	addValue(value) {

		if (this.head === null) {
			this.head = new Node(value);
			this.tail = this.head;
		} else {
			this.tail.setNext(new Node(value));
			this.tail = this.tail.getNext();
		}
	}
	getHead() {
		return this.head;
	}
	setHead(value) {
		this.head = value;
	}
	setTail(value) {
		this.tail = value;
	}
	getTail() {
		return this.tail;
	}
	display() {
		if (this.head !== null) {
			//console.log(this.head.getValue());

			var temp = this.head;
			while (temp !== null) {
				console.log(temp.getValue());
				temp = temp.getNext();
			}
		} else {
			console.log("head is null");
		}
	}
	reverse() {
		this.tail = this.head;
		var prev = null;
		var current = this.head;
		var next = null;

		while (current !== null) {
			next = current.getNext();
			current.setNext(prev);
			prev = current;
			current = next;
		}

		this.head = prev;
	}

}

// build a new list
var list = new List();
list.addValue(11);
list.addValue(12);
list.addValue(13);
list.addValue(14);
//display that list
console.log("\nDisplay original list");
list.display();

//reverse the list
list.reverse();

//display reversed list
console.log("\nDisplay reversed list");
list.display();