// merge 2 sorted arrays and put into 3rd array
// Assigned Sunday March 12, 2017 InterPrep bootcamp

var arr1 = [1,3, 6, 7];
var arr2 = [ 2, 8, 9, 10];
var arr3 = [];

var i=0;
var j=0;
var k=0;


// compare 2 positions, assign lowest to result array,
// advance indexes, check to see if you are the end,
// then recursively call again. 
function compare(i,j){
	//console.log(i,j, arr1[i], arr2[j]);  // for troubleshooting
	
	
	// compare and assign
	if (arr1[i] <= arr2[j]){
		arr3[k++] = arr1[i++];
	} else {
		arr3[k++] = arr2[j++];
	}

	//check to see if you are at the end of the array
	if (i>= arr1.length && j >= arr2.length ){ // at the end of both arrays
		return;
	} else if ( i >= arr1.length ) { // at then end of arr1, so put in from arr2
		arr3[k++] = arr2[j++];
	} else if ( j >= arr2.length) { // at the end of arr2, so put in from arr1
		arr3[k++] = arr1[i++];
	}
		

	compare(i,j); // call it again
}

compare(i,j);

// test
for (i=0; i < k-1; i++){
	console.log(arr3[i]);
}



