// problem:
//   Given an array, find the biggest palindrome within that array.
//   As a bonus, we are also returning the biggest palindrome. 
// 
"use strict";

function findBiggestPalindrome(arr) {

	var max = 1; // initialize current max paladrome length
	var startPos; // after we get a palindrome this is it's start pos
	var endPos; // after we get a palindrome this is it's end pos

	// make sure array exists
	if (arr === null || arr.length === 0) {
		console.log("input array empty");
		return;
	}

	// loop through each element of the array, and for
	// each element get the palindrome size, and palindrome
	// start and end point. 
	for (var i = 0; i < arr.length; i++) {

		var retarr = []; // return array, contains count, start, end

		retarr = getPalindrome(arr, i);
		var palindromeSize = retarr[0];

		if (palindromeSize > max) {
			max = palindromeSize;
			startPos = retarr[1]; // start pos of palindrome
			endPos = retarr[2]; // end pos of palindrome
		}

	}
	console.log("Size of biggest palindrome: " + max);

	console.log("palindrome is: " +
		arr.slice(startPos, endPos + 1).toString());

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

console.log("\ntest 4 - nested and overlapping palindromes");
arr = ["r", "a", "d", "a", "r", "a", "d", "a", "w", "a", "d", "a", "r", "a", "d", "a"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 5 - test case where the whole array is a palindrome");
arr = ["r", "a", "d", "a", "r"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 6 - empty array");
arr = [];
console.log("input array: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 6 - all same letters, except last letter");
arr = ["f", "f", "f", "f", "f", "a"];
console.log("input array: " + arr);
findBiggestPalindrome(arr);