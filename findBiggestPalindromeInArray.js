// problem:
//   Given an array, find the biggest palindrome within that array
//   So far, just doing odd length only palindromes
// 
var arr = ["p", "o", "x", "a", "m", "y", "e", "m", "e", "f", "y", "f", "e", "m"];
//var arr = ["p", "o","x", "o", "m", "y", "e"];

// make sure array exists
if (arr == null || arr.length == 0) {
	console.log("array empty");
	return;
}

var max = 1; // initialize current max paladrome length

// if odd it will be right in the middle
// if even it will be 1 to the right
startPoint = Math.floor(arr.length / 2); // 1 right of the middle


var firstTime = 1; // just starting, first search for the paladrome
var pivotPtrL = startPoint - 1; // points to array entry on the left
var pivotPtrR = startPoint + 1; // points to array entry on the right

console.log("starting " + startPoint);

var side = 1; // 1 means left side, 0 means right side

var pivot; // the point at which you start the paladrome search

// loop through the array from center point outwards. 
// Each iteration checks paladrome for that array entry.
// As you move outward, the paladrome max possible size gets more
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
		console.log("left pivot is " + pivot);
		//pivotPtrL--;
		side = 0;
	} else { //right side
		//console.log("enter while  pivotPtrR " + pivotPtrR);
		pivot = pivotPtrR++;
		console.log("right pivot is " + pivot);
		//pivotPtrR++;
		side = 1;
	}

	// loop through and get the size of the paladrome
	ptrL = pivot - 1; // fan outward to the left
	ptrR = pivot + 1; // fan outward to the right
	count = 1;
	while (arr[ptrL--] == arr[ptrR++]) { // core part of the whole program
		count = count + 2;
	}
	// Todo: add for even length palindromes. For that I will add 
	// cases for right and or left same letter.

	if (count > max) max = count;
	//  console.log("count " + count + " max " + max + " pivotPtrL " + pivotPtrL );


}
console.log("The size of the biggest paladrome is " + max);