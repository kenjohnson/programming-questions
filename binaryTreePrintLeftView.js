// Print the left view of this binaray tree; in other words,
// print all the nodes that you can see from the left. 
// To run on windows, bring up command prompt and do
// >node binaryTreePrintLeftView.js
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

var max_level = 0; // current maximum level 

// The tricky part here is that you have to remember as
// you come off the stack, you revert to the previous level. 
// Remember as you traverse the tree, you go down and the 
// level keeps increasing, but as you come back up the tree, the
// level keeps decreasing.    
function traverse(n, level) {


	// if you have gone to the next level, print the node.  	
    if (max_level < level) {
    	console.log( n.getValue());
    	max_level = level;
    }

    
	if (n.getLeft()) {
		var left = traverse(n.getLeft(), level +1 );
	}

	if (n.getRight()) {
		var right = traverse(n.getRight(), level + 1);
	}

    return;
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
traverse(arr[1],1); // start at level 1.  


console.log("\ntest, take off leg 7\n");
max_level = 0;
arr[4].setLeft(null);

traverse(arr[1],1); // start at level 1. 


console.log("\ntest, take off legs 7 and 4\n");

max_level = 0;

arr[4].setLeft(null);
arr[2].setLeft(null);

traverse(arr[1],1); // start at level 1. 