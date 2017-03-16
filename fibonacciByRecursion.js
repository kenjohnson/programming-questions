// print the fibonacci numbers using recursion
var N = 100;

console.log(0); 

function fib(a,b){
	if (a+b >= N) return;
	console.log(a+b);
	fib(b,a+b);

}

fib(0,1);