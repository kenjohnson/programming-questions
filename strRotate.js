// Rotates a string.
// if string is "abcde" 
// and position is 2
// result would be  "deabc"
//
// The method used, reverses the string, this avoids
// the problem of having to add to the beginning of
// the string


function rotate( str, pos) {

//adjust position (for case is pos exceeds string length)
pos =  pos % str.length;
	
// reverse the entire string
var strReversed = str.split("").reverse().join("");
console.log("\nreversed string is: " + strReversed );

// get substrings to pos postion
var str1 = strReversed.substring(0,pos);
var str2 = strReversed.substring(pos);

//reverse the substrings back to original
//and then concatenate.
return str1.split("").reverse().join("") + 
                  str2.split("").reverse().join("");

}

var string = "abcde";
var pos = 2;
var res = rotate( string, pos);
console.log("\nstring is: " + string + " position: " + pos + " result: " + res);

string = "abcde";
pos = 8;
res = rotate( string, pos);
console.log("\nstring is: " + string + " position: " + pos + " result: " + res);