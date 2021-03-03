function smallest(numbers) {
  let currentNum = numbers;
  for (num of numbers) {
    if (num < currentNum) {
      currentNum = num;
    }
  }
  return currentNum;
}

//O(n) Time Complexity

console.log(smallest([6, 7, 8, 9, 10]));

function evenOrOdd(number) {
  if (number % 2 === 0) {
    // 1
    return "even"; // 1
  } else {
    // 1
    return "odd"; // 1
  }
}

//O(1) => Constant Time Complexity
