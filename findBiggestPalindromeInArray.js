// problem:
//   Given an array, find the biggest palindrome within that array
// 
"use strict";

function findBiggestPalindrome(arr) {
	// make sure array exists
	if (arr === null || arr.length === 0) {
		console.log("input array empty");
		return;
	}

	var max = 1; // initialize current max paladrome length

	// Initialize start point in the middle of the array,
	// (we will zig zag left and right and touch every element
	// of the array)
	// if odd it will be right in the middle
	// if even it will be 1 to the right
	var startPoint = Math.floor(arr.length / 2); // 1 right of the middle


	var firstTime = 1; // just starting, first search for the paladrome
	var pivotPtrL = startPoint - 1; // points to array entry on the left
	var pivotPtrR = startPoint + 1; // points to array entry on the right

	var startPalindrome; // after we get a palindrome this is it's start pos
	var endPalindrome; // after we get a palindrome this is it's end pos

	console.log("pivot point of biggest palindrome: " + startPoint);

	var side = 1; // 1 means left side, 0 means right side

	var pivot; // the point at which you start the paladrome search

	// loop through the array from center point outwards. 
	// Each iteration checks palindrome for that array entry.
	// As you move outward, the palindrome max possible size gets more
	// and more limited. Once that size is less that max count,
	// then loop terminates (because not possible to exceed existing
	// max size )
	while (pivotPtrL >= 0 && pivotPtrL * 2 + 1 > max) {

		//console.log("enter while  pivotPtrL " + pivotPtrL + " pivotPtrR " + pivotPtrR );
		if (firstTime) { // first point (in the center)
			pivot = startPoint;
			firstTime = 0;
		} else if (side) { // left side
			//console.log("enter while  pivotPtrL " + pivotPtrL);
			pivot = pivotPtrL--;
			//console.log("pivot coming from left side " + pivot);
			//pivotPtrL--;
			side = 0;
		} else { //right side
			//console.log("enter while  pivotPtrR " + pivotPtrR);
			pivot = pivotPtrR++;
			//console.log("pivot coming from right side " + pivot);
			//pivotPtrR++;
			side = 1;
		}

		var retarr = []; // return array, contains count, start, end

		retarr = getPalindrome(arr, pivot);
		var palindromeSize = retarr[0];
		//console.log("size " + retarr[0]);
		//console.log(" pivotPtrLx " + pivotPtrL );

		if (palindromeSize > max) {
			max = palindromeSize;
			startPalindrome = retarr[1]; // start pos of palindrome
			endPalindrome = retarr[2]; // end pos of palindrome
		}
		//console.log(" pivotPtrL " + pivotPtrL );


	}
	console.log("Size of biggest palindrome: " + max);

	console.log("palindrome is: " +
		arr.slice(startPalindrome, endPalindrome + 1).toString());

}

function getPalindrome(arr, pivot) {

	// From the pivot point fan outward towards the right and left until it
	// is no longer a palindrome, or you reach the array boundary.
	var ptrL;
	var ptrR;
	var count;

	// This if block initializes the left and right pointers and initializes the count.
	// This if block is covering the case where you might have 2 letters  next to 
	// each other that are the same.  
	if (arr[pivot - 1] === arr[pivot] && arr[pivot] !== arr[pivot + 1]) { // if duplicate letter on left
		ptrL = pivot - 2;
		ptrR = pivot + 1;
		count = 2;
	} else if (arr[pivot - 1] !== arr[pivot] && arr[pivot] === arr[pivot + 1]) { // if duplicate letter on right
		ptrL = pivot - 1;
		ptrR = pivot + 2;
		count = 2;
	} else {
		ptrL = pivot - 1;
		ptrR = pivot + 1;
		count = 1;
	}


	// loop through and get the size of the palindrome
	// Note we check to see if we are still within the
	// array boundaries. 
	while (arr[ptrL] === arr[ptrR] && ptrL >= 0 && ptrR < arr.length) { // core part of the whole program
		ptrL--;
		ptrR++;
		count = count + 2;
	}
	//console.log("L " + ptrL + " R " + ptrR );
	// we are done, we have the count, now just set the 
	// start and end points so we can print the palindrome.
	var start = ptrL + 1;
	var end = ptrR - 1;
	return [count, start, end];
}

// run test
console.log("test 1 - nested palindrome plus touches right boundary");
var arr = ["p", "o", "x", "a", "m", "y", "e", "m", "e", "f", "y", "f", "e", "m"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 2 - easy functional test");
arr = ["p", "o", "x", "o", "m", "y", "e"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 3 - test 2 characters for pivot");
arr = ["p", "a", "b", "b", "a", "y", "e"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 4 - nested ");
arr = ["r", "a", "d", "a", "r", "a", "d", "a", "w", "a", "d", "a", "r", "a", "d", "a", "r"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 5 - test whole array is palindrome");
arr = ["r", "a", "d", "a", "r"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 6");
arr = [];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 6 - all same letters, except last");
arr = ["f","f", "f", "f", "f", "a"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);