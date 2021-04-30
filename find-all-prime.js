var countPrimes = function(n) {
    const primeNumbers = [];
   
    for(let i = 0; i < n; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
        
    }

    return primeNumbers.length;
};

function isPrime(num) {
  if (num <= 3) return num > 1;
  
  if ((num % 2 === 0) || (num % 3 === 0)) return false;
  
  let count = 5;
  
  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;
    
    count += 6;
  }
  
  return true;
}