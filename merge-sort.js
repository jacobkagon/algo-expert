function sort(array) {
    if (array.length < 2) {
      return array;
    }
    if ((array.length === 2)) {
      return array[0] > array[1] ? [array[1], array[0]] : array;
    }
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);
  
    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);
  
    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
  
    while (
      leftArrayIndex < leftSortedArray.length ||
      rightArrayIndex < rightSortedArray.length
    ) {
        if(leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
            mergedArray.push(rightSortedArray[rightArrayIndex])
            rightArrayIndex++
        } else {
          mergedArray.push(leftSortedArray[leftArrayIndex])
          leftArrayIndex++
        }
    }
    return mergedArray;
  }
  
  const sortedArray = sort([1, -3, 10, 4, 9, 2, 5]);
  
  console.log(sortedArray);
  


