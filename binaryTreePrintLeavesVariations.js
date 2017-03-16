// The original code is from binaryTreePrintLeaves.js
// This file is used to hack around in and experiment
// with variations of that original. 
// To run on windows, bring up command prompt and do
// >node binaryTreePrintLeaves
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
	console.log(n.getValue());
	// if (n.getLeft() == null && n.getRight() == null){
	// 	//console.log(n.getValue());
	// }

	// if (n.getLeft()){
	// 	console.log(n.getLeft().getValue());
	// }
	// if (n.getRight()){
	// 	console.log(n.getRight().getValue());
	// }


	if (n.getLeft()) {
		traverse(n.getLeft());
	}
	//console.log(n.getValue());
	if (n.getRight()) {
		traverse(n.getRight());
	}
	//console.log(n.getValue());
}

// create tree for testing
arr = [];
for (i = 1; i < 10; i++) {
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
traverse(arr[1]);