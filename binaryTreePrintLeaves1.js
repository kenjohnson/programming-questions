class Node {

	constructor(value){
       // this.left = left;
       // this.right = right;
        this.value = value;
	}
	

	getLeft(){
		return this.left;
	}

	setLeft(n){
		this.left = n;
	}

	getRight(){
		return this.right;
	}
	setRight(n){
		this.right = n;
	}

	getValue(){
		return this.value;
	}

	setValue(value){
		this.value = value;
	}
}


function traverse(n){
    //console.log(n.getValue());
	if (n.getLeft() == null && n.getRight() == null){
		//console.log(n.getValue());
	}

	if (n.getLeft()){
		traverse(n.getLeft());
	}
    console.log(n.getValue());
	if (n.getRight()){
		traverse(n.getRight());
	}
	//console.log(n.getValue());
}



arr = [];
for (i=1; i < 10; i++) {
    arr[i] = new Node(i);
}
 
arr[6].setLeft(arr[8]);
arr[6].setRight(arr[9]);
arr[3].setLeft(arr[6]);
arr[4].setLeft(arr[7]);
arr[2].setLeft(arr[4]);
arr[2].setRight(arr[5]);
arr[1].setLeft(arr[2]);
arr[1].setRight(arr[3]);


traverse(arr[1]);