// Print nodes which are kth distance from the root of this binaray tree; in other words,
// print all the nodes on a certain row on this tree.  
// To run on windows, bring up command prompt and do
// >node binaryTreePrintLeftView.js
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


function traverse(n, k) {

	if (k === 0) { // if you are at the desired level
		console.log(n.getValue());
	}

	if (n.getLeft()) {
		traverse(n.getLeft(), k - 1);
	}

	if (n.getRight()) {
		traverse(n.getRight(), k - 1);
	}

	return;
}


// create tree for testing
var arr = [];
for ( var i = 1; i < 10; i++) {
	arr[i] = new Node(i);
}

// add the legs
arr[6].setLeft(arr[8]);
arr[6].setRight(arr[9]);
arr[3].setLeft(arr[6]);
arr[4].setLeft(arr[7]);
arr[2].setLeft(arr[4]);
arr[2].setRight(arr[5]);
arr[1].setLeft(arr[2]);
arr[1].setRight(arr[3]);

// run the test
console.log("\nTest distance 1 from root\n");
traverse(arr[1], 1); // distance 1 from root

console.log("\nTest distance 2 from root\n");
traverse(arr[1], 2); // distance 2 from root

console.log("\nTest distance 3 from root\n");
traverse(arr[1], 3); // distance 3 from root