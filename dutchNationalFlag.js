/*
 * Given an array of positives, 0’s and negatives, change the array to make sure all the negatives come first, 
 * then the 0’s and then positive’s. This is also known as the Dutch flag problem. 
 * Here we do it in a single pass of the array.
 */

"use strict";

class DutchNationalFlag {

	constructor(value) {
		this.value = value;
	}


	reArrange(arr) {

		// set pointers
		var first = 0;
		var second = 0;
		var third = arr.length - 1;

		// loop through the array. For each array entry check if it's
		// negative, zero, or positive; swap if necessary and update
		// pointers. 
		while (second <= third) {
			if (arr[second] < 0) {
				swap(arr, first++, second++);
			} else if (arr[second] > 0) {
				swap(arr, second, third--);
			} else {
				second++;
			}
		}
		//console.log(arr);
		return arr;
	}


}

function swap(arr1, one, two) {

	var temp = arr1[one];
	arr1[one] = arr1[two];
	arr1[two] = temp;
	return arr1;
}


var flag = new DutchNationalFlag();

var resArr = [];

console.log("\ntest1 - general functional test");
var A = [0, 1, 5, -6, -2, 7, 8, -11, 0];
console.log("input  " + A);
resArr = flag.reArrange(A);
console.log("result " + resArr);

console.log("\ntest2 - completely opposite");
A = [1, 5, 7, 3, 0, 0, 0, -1, -3, -5, -7];
console.log("input  " + A);
resArr = flag.reArrange(A);
console.log("result " + resArr);

console.log("\ntest3 - lots of out of order positions");
A = [1, -5, 7, 0, -4, -9, 7, -1, 0, -5, 0];
console.log("input  " + A);
resArr = flag.reArrange(A);
console.log("result " + resArr);