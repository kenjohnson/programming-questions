// get levels in the tree
// Remember root level is zero, so in my model it is 3
"use strict";
class Node {

	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}


	getLeft() {
		return this.left;
	}

	setLeft(n) {
		this.left = n;
	}

	getRight() {
		return this.right;
	}
	setRight(n) {
		this.right = n;
	}

	getValue() {
		return this.value;
	}

	setValue(value) {
		this.value = value;
	}
}


function traverse(n) {
	//console.log(n.getValue());
	var left = 0;
	var right = 0;

	if (n.getLeft()) {
		left = traverse(n.getLeft());
	}

	if (n.getRight()) {
		right = traverse(n.getRight());
	}

	//console.log("   value is: " + n.getValue());
	if (left > right) {
		//console.log("value is " + n.getValue() + " left is " + left);
		return left + 1;
	} else {
		//console.log("value is " + n.getValue() + " right is " + right);
		return right + 1;
	}

}

// create tree for testing
var arr = [];
//for (i=1; i < 12; i++) {
for ( var i = 1; i < 10; i++) {
	arr[i] = new Node(i);
}

// add the legs
//arr[10].setRight(arr[11]);
//arr[9].setLeft(arr[10]);
arr[6].setLeft(arr[8]);
arr[6].setRight(arr[9]);
arr[3].setLeft(arr[6]);
arr[4].setLeft(arr[7]);
arr[2].setLeft(arr[4]);
arr[2].setRight(arr[5]);
arr[1].setLeft(arr[2]);
arr[1].setRight(arr[3]);

// run the test
var ret = 0;
ret = traverse(arr[1]);
ret = ret - 1; // root node is 0 so we subtract it
console.log("Number of levels is: " + ret);