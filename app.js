function findElement(sortedArr, element) {
let startIdx = 0;
let endIdx = sortedArr.length - 1;
while(startIdx <= endIdx) {
const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2)

if(element === sortedArr[middleIdx]) {
    return middleIdx;
}

if(sortedArr[middleIdx] < element) {
    startIdx = middleIdx + 1;
} else {
    endIndex = middleIdx - 1;
}

}

}

const arr = [1,5,9,13,99,100] //were going to use 9 as the middle

console.log(findElement(arr, 99))