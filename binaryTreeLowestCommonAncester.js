// Find the lowest common ancester.
// Given 2 nodes, n1 and n2, find the lowest common ancester.
// To run on windows, bring up command prompt and do
// >node binaryTreeLowestCommonAncester.js
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

// n = the node
// n1 = node 1
// n2 = node 2
function findLca( n, n1, n2) {

	var left_lca = new Node();
    var right_lca = new Node();

    if (n === null) return null;
    
    //console.log("\nENTERING findlca " + n.getValue());

    // If the node is one of the nodes we are looking for, then
    // return that node
    if (n.getValue() == n1 || n.getValue() == n2) {
       // console.log("  GOT ONE value " + n.getValue() + " n1 " + n1 + " n2 " + n2);
       return n;
    }

    // it's not one of the nodes we were looking for so, lets
    // traverse the tree and keep looking. 
	left_lca = findLca(n.getLeft(), n1, n2);
	right_lca = findLca(n.getRight(), n1, n2);
	
	// both the left and right are defined and not equal to null,
	// so we found the lca
	if ( left_lca && left_lca !== null && right_lca && right_lca !== null ) {

        //console.log("in both not equal to null,  n.getValue is " + n.getValue() + " left " + left_lca.getValue() + " right " + right_lca.getValue()  );
		return n;
	}
   
    //console.log("before ternary: " + left_lca !== null ? left_lca: right_lca );
	return left_lca !== null ? left_lca: right_lca;

}
	

// create tree for testing
var arr = [ ];
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
console.log("\n\n\nTest with: 2 3 ");
var lca = findLca(arr[1], 2, 3);
console.log("Result: " + lca.getValue());

console.log("\n\n\nTest with: 4 5 ");
lca = findLca(arr[1], 4, 5);
console.log("Result: " + lca.getValue());

console.log("\n\nTest with: 4 3");
lca = findLca(arr[1], 4, 3);
console.log("Results: " + lca.getValue());

console.log("\n\nTest with: 2 8");
lca = findLca(arr[1], 2, 8);
console.log("Results: " + lca.getValue());

console.log("\n\nTest with: 3 6 ");
lca = findLca(arr[1], 3, 6);
console.log("Results: " + lca.getValue());