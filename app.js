function isPrime(num) {
  if (num % 2 === 0 || num % 3 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

isPrime(14)