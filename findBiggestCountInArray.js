// In an array of sorted numbers,  find the biggest 
// substring where the numbers are the same.
// For example, in the string "124577789", 777 would
// be the biggest substring. 
//
// The time complexity is O(n)
// because you will have to go through the whole
// array in the worst case. 

var arr = [1, 2, 2, 3, 5, 6, 7, 7, 7, 7, , 8, 9, 10, 11];

var count = 1;
var max = 1;

for (var i = 0; i < arr.length - 1; i++) {

	if (arr[i] == arr[i + 1]) {
		count++;
		console.log(arr[i]);
	} else {
		console.log(arr[i] + " in else count is: " + count);
		if (count > max) {
			max = count;
		}
		count = 1;
	}

    // This part is really not necessary. 
	if (max > arr.length - i) { // if max bigger than remaining space your done
		break;
	}

}
console.log("max is: " + max);