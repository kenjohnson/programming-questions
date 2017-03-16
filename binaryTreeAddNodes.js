// binary tree, add node, delete nodes
// Assigned Sunday March 12, 2017 InterviewPrep bootcamp
class Node {

	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
		this.parent = null;
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

	getParent() {
		return this.parent;
	}

	setParent(node) {
		this.parent = node;
	}
}

function addNode(n, value) {

	var node = new Node(value);
	//console.log(node.getValue());

	// if leaf node, just put the new node on the left
	if (n.getLeft() == null && n.getRight() == null) {
		n.setLeft(node);

		// if there is a left leg,(or both left and right) add node along the left
	} else if (n.getLeft()) {
		// set new node's left to whatever existing node used to be
		node.setLeft(n.getLeft());
		// now for existing node, set left ptr to point to this new node
		n.setLeft(node);
	} else if (n.getRight()) { //if no left, but a right, add on right side
		node.setLeft(n.getRight());
		n.setRight(node);
	}
}

function deleteNode(n) {

	// TODO: add case for deleting top node (no parent)

	var parentNode = n.getParent();

	if (parentNode.getLeft() == n) { // you are left node of your parent

		// leaf node, just set parent left ptr to null
		if (n.getLeft() == null && n.getRight() == null) {
			parentNode.setLeft(null);
			n.setValue(null); // ?? not necessary
			// node has left leg, no right leg, set parent ptr to left leg 
		} else if (n.getLeft() != null && n.getRight() == null) {

			parentNode.setLeft(n.getLeft());
			// n.setValue(null); 
			// node has no left leg, has right leg,set parent ptr to right let
		} else if (n.getLeft() == null & n.getRight() != null) {
			parentNode.setLeft(n.getRight());
			// n.setValue(null); 
			// node has both left and right leg.
		} else if (n.getLeft() != null && n.getRight() != null) {
			// parent node has left leg only
			if (parentNode.getRight() == null) {
				// parent node has left leg only
				parentNode.setLeft(n.getLeft());
				parentNode.setRight(n.getRight());

			} else {
				//TODO: add code to deal with 3 legs
				//      ask instructors about this. 
				console.log("3 legs to deal with. ask instructor")
			}
		}
	} else if (parentNode.getRight() == n) { // you are right node of your parent



	}
	console.log("parentNode.getValue " + parentNode.getValue())

}

function traverse(n, action, desiredNode, valOfNewNode) {
	//console.log(n.getValue() + " " + action);
	//console.log("in traverse " + n.getValue() + " " + action);

	if (n.getLeft() == null && n.getRight() == null) {
		//console.log( "value is " + n.getValue());
	}

	// add a node 
	if (action == "add") { // if you want to add a node
		if (n.getValue() == desiredNode) {
			addNode(n, valOfNewNode);
		}
	}

	// delete node
	if (action == "delete") {
		if (n.getValue() == desiredNode) {
			deleteNode(n);
		}
	}
	console.log("in traverse " + n.getValue() + " " + action);
	if (n.getLeft()) {
		console.log("calling from getLeft");
		traverse(n.getLeft(), action, desiredNode, valOfNewNode);
	}
	//console.log(n.getValue());
	if (n.getRight()) {
		console.log("calling from getRight");
		console.log("n.getRight().getValue is " + n.getRight().getValue());
		console.log("n.getRight() is: " + n.getRight());
		console.log("n.getRight().getValue() is: " + n.getRight().getValue());
		traverse(n.getRight(), action, desiredNode, valOfNewNode);
	}
	//console.log(n.getValue());


}


// SETUP TEST TREE
var arr = [];
for (var i = 1; i <= 10; i++) {
	arr[i] = new Node(i);
}

//arr[9].setRight(arr[10]);
arr[6].setLeft(arr[8]);
arr[6].setRight(arr[9]);
arr[3].setLeft(arr[6]);
arr[4].setLeft(arr[7]);
arr[2].setLeft(arr[4]);
arr[2].setRight(arr[5]);
arr[1].setLeft(arr[2]);
arr[1].setRight(arr[3]);

// set the pareents (on right side)

arr[9].setParent(arr[6]);
arr[8].setParent(arr[6]);
arr[6].setParent(arr[3]);
arr[3].setParent(arr[1]);

// set the parents (on left side)
arr[7].setParent(arr[4]);
arr[4].setParent(arr[2]);
arr[2].setParent(arr[1]);
arr[5].setParent(arr[2]);


// RUN test
traverse(arr[1], "delete", 4);
console.log("   ");
traverse(arr[1]);

// add other test here, null empty array