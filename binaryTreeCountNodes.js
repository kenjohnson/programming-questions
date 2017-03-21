// Count all the nodes on this binary tree.
//
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


function  traverse(n) {
	var left = 0; 
	var right = 0;
	
	//if (n.getLeft() == null && n.getRight() == null) { // it is a leaf node
	//	return 1;
	//}

	if (n.getLeft()) {
		left = traverse(n.getLeft());
		console.log("n.getValue " + n.getValue() + " left is: " + left  );
	}

	if (n.getRight()) {
		right = traverse(n.getRight());
		console.log("  n.getValue " + n.getValue() + " right is: " + right  );
	}
	
	return left + right + 1;
	

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
var nodeCount = 0;
nodeCount = traverse(arr[1]);
console.log("nodeCount is: " + nodeCount);