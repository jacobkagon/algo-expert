function findElement(arr, element) {

    // let index = 0;
    // for(const item of arr) {
    //     if(item === element) {
    //         return index
    //     } 
    //     index++
    // }

    for(let i = 0; i < arr.length;i++) {
        if(arr[i] === element) {
            return i;
        }
    }

}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));