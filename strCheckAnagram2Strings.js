// Check if 2 strings are anagrams of each other.
// This sorts both strings and compares the two strings.  


function compareStr(str1,str2) {

	if( str1.length != str2.length){

       return "Not an anagram, string length does not match";
	}

    // split string so it becomes an array, then sort,
    // then join to turn it back into a string. 
	var str1Sorted = str1.split("").sort().join("");
	var str2Sorted = str2.split("").sort().join("");
	
	// console.log("\nSorted string1 is: " + str1Sorted);
	// console.log("Sorted string2 is: " + str2Sorted);

	if (str1Sorted === str2Sorted){
		return "It is an anagram.";
	} else {
		return "It is not an anagram.";
	}

}

var string1 = "abc";
var string2 = "cba";
var res = compareStr(string1, string2);
console.log("\nstring1: " + string1 + "\nstring2: " + string2 + "\nresult: " + res);

string1 = "abc";
string2 = "cbx";
res = compareStr(string1, string2);
console.log("\nstring1: " + string1 + "\nstring2: " + string2 + "\nresult: " + res);

string1 = "abc";
string2 = "cbac";
res = compareStr(string1, string2);
console.log("\nstring1: " + string1 + "\nstring2: " + string2 + "\nresult: " + res);