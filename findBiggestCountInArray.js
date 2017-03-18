// in array of sorted numbers find biggest 
// substring where numbers are the same
// time complexity, I would say is O(n)
// because you will have to go through the whole
// array in worse case. 

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

	if (max > arr.length - i) { // if max bigger than remaining space your done
		break;
	}

}
console.log("max is: " + max);