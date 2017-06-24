// problem:
//   Given an array, find the biggest palindrome within that array
// 
"use strict";

function findBiggestPalindrome(arr) {
	// make sure array exists
	if (arr === null || arr.length === 0) {
		console.log("array empty");
		return;
	}

	var max = 1; // initialize current max paladrome length

	// if odd it will be right in the middle
	// if even it will be 1 to the right
	var startPoint = Math.floor(arr.length / 2); // 1 right of the middle


	var firstTime = 1; // just starting, first search for the paladrome
	var pivotPtrL = startPoint - 1; // points to array entry on the left
	var pivotPtrR = startPoint + 1; // points to array entry on the right

	console.log("starting " + startPoint);

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
			console.log("pivot coming from left side " + pivot);
			//pivotPtrL--;
			side = 0;
		} else { //right side
			//console.log("enter while  pivotPtrR " + pivotPtrR);
			pivot = pivotPtrR++;
			console.log("pivot coming from right side " + pivot);
			//pivotPtrR++;
			side = 1;
		}

		var palindromeSize = getPalindrome(arr, pivot);

		if (palindromeSize > max) {
			 max = palindromeSize;
			 console.log("pivot for current max is: " + arr[pivot]);
		}
		//  console.log("count " + count + " max " + max + " pivotPtrL " + pivotPtrL );


	}
	console.log("The size of the biggest palindrome is " + max);
}

function getPalindrome(arr, pivot) {

	// check for double letters

	var ptrL = pivot - 1; // fan outward to the left
	var count = 1; // set palindrome size count

	if (arr[pivot - 1] === arr[pivot]) { // check if 2 letters are the same, if so move ptr, incr count
		ptrL = pivot - 2;
		count = 2;
	}
	var ptrR = pivot + 1; // fan outward to the right

	// loop through and get the size of the palindrome
	while (arr[ptrL--] == arr[ptrR++]) { // core part of the whole program
		count = count + 2;
	}
	// Todo: add for even length palindromes. For that I will add 
	// cases for right and or left same letter.

	return count;
}

// run test
console.log("test 1");
var arr = ["p", "o", "x", "a", "m", "y", "e", "m", "e", "f", "y", "f", "e", "m"];
console.log("test array is: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 2");
arr = ["p", "o", "x", "o", "m", "y", "e"];
console.log("test array is: " + arr);
findBiggestPalindrome(arr);

console.log("\ntest 3");
arr = ["p", "a", "b", "b", "a", "y", "e"];
console.log("test array is: " + arr);
findBiggestPalindrome(arr);