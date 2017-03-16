// print fibonacci numbers, using loop and not recursion

var first = 0;
var second = 1;
var temp = 0;

N = 100;

console.log(0);

while ( second < N ) {
   
    if(first > 0 )	console.log(second);
   
	temp = first + second;
	first = second;
	second = temp;
	   	
}