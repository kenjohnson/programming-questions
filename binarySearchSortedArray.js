// Search an array of sorted numbers to find a
// specific number
// solution uses recursion

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 23, 40, 41, 44, 45]; // input array

desiredNum = 20;

// this function keeps cutting the array in half until it
// finds the number (or can't find number)
function binSearch(start, end, num) {

	var result = false;
	mid = Math.floor(start + (end - start) / 2);
	console.log("\nOn enter, start is: " + start + " end is: " + end + " mid is: " + mid);

	if (arr[mid] == num) {
		console.log("found number: " + arr[mid]);
		return "found number";
	}

	// When you can no longer cut the array segment in half, the start and end 
	// will run into each other, and you have check each one
	if (end - start == 1) {
		if (arr[end] == num || arr[start] == num) {
			console.log("array[end]" + arr[end] + " " + arr[start] + " num is " + num);
			return "Found number";
		} else {
			return "Did not find number";
		}
	}
	if (num < arr[mid]) {
		console.log(" num is less than mid, mid is: " + mid);
		end = mid; // reset end (we leave start alone)
		result = binSearch(start, end, num);

	} else if (num > arr[mid]) {
		console.log(" num is more than mid, mid is: " + mid);
		start = mid; // reset start (we leave end along)
		result = binSearch(start, end, num);
	} else {
		console.log("Dropped through if/else, something went wrong.");
	}

	return result;
}

var start = 0;
var end = arr.length - 1;
console.log("arr length is: " + end);
var res = false;
res = binSearch(start, end, desiredNum);
console.log("result is: " + res);