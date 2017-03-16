// Taken from class. 
//  In javascript, if you have i> 0 in the for loop counter,
//  it will result in an error. I had to change it to 1. 
function fun(n){
  var count = 0;

  console.log(n, n/2);

  for (let i = n; i > 1; i/=2) {
    console.log("outer    " + i);
    for (let j = 0; j < i; j++) {
      console.log("inner " + count);
      count += 1;
    }
  }

  return count;
}

fun(8);