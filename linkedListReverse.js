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
	constructor(value) {
		this.head = null;
		this.tail = null;
	}
	addValue(value) {
		//this.value = value;
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
	setHead(value){
       this.head = value;
	}
	setTail(value){
		this.tail = value;
	}
	getTail() {
		return this.tail;
	}
	display() {
		if (this.head != null) {
			//console.log(this.head.getValue());

			var temp = this.head;
			while (temp != null) {
				console.log(temp.getValue());
				temp = temp.getNext();
			}
		} else {
			console.log("head is null");
		}
	}
	reverse(){
		this.tail = this.head;
         var prev = null;
         var current = this.head;
         var next = null;

         while( current != null){
         	next = current.getNext();
         	current.setNext(prev);
         	prev = current;
         	current = next;
         	
         	console.log("prev " + prev + " current " + current + " next "+ next);
         }

         this.head = prev;




	}

}

a = new Node(10);
console.log(a.getValue());
a.getNext();
console.log(a.getNext());

list = new List();
list.display();
list.addValue(11);

list.display();
list.addValue(12);

list.display();
list.addValue(13);

list.display();
list.addValue(14);
console.log("last one");
list.display();
/*
function reverse( list){
	console.log("entering reverse");
	list.display();
	var prev = null;
	var current = list.getHead();
	var next = list.getHead().getNext();

    while (next != null) {
    	next = current.getNext();
    	current.setNext(prev);
    	prev = current;
    	

    	console.log("prev " + prev + " current " + current + " next "+ next);
    }
    prevh = list.getHead();
    list.setHead(current);
    list.setTail(prevh);
    console.log("before return");
    list.display();
    return list;
}
*/
list.reverse();

list.display();
