function selectionSort(array) {
	let startIdx = 0;
	
	while(startIdx < array.length - 1) {
		let smallestIdx = startIdx;
		for(let i = startIdx + 1; i < array.length; i++) {
			if(array[smallestIdx] > array[i]) {
				smallestIdx = i;
			}
		
		}
		swap(startIdx, smallestIdx, array);
			startIdx++
	}
		return array
  // Write your code here.
}

function swap(i, j, arr) {
	const temp = arr[j]
	arr[j] = arr[i]
	arr[i] = temp
}
