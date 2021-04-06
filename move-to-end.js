function moveElementToEnd(array, toMove) {
	//check if the toMove number is in the array.
	//add it to a new array
  // Write your code here.
	
	let newArr = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i] === toMove) {
			newArr.push(array[i]);
			
		}
	}
	return array.filter((num) => num !== toMove).concat(newArr)
}
