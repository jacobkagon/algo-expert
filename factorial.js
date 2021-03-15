function fact(num) {
  //number is 3 => 3 * 2 * 1 = 6
  //we want to get all numbers including and less than and mu;tiply them together
  //loop through it

  let smallerNumbersArray = [];
  for (let i = 1; i <= num; i++) {
    smallerNumbersArray.push(i);
  }

  return smallerNumbersArray.reduce((a, b) => a * b);
}

console.log(fact(5));

//recursive solution

function fact(num) {
  if (num === 1) {
    return 1;
  }

  return n * fact(n - 1);
}
