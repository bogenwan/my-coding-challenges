const isPrime = (num) => {
  let state = true;
  if (num < 2) {
    state = false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      state = false;
    }
  }
  return state;
};
// console.log(isPrime(15));

const largestPrimeFactor = (number) => {
  // create a prime factor list
  let primeFactorList = [ ];
  // try all the prime numbers that can divid input number
  for (var i = 2; i <= number; i++) {
    // if the number is prime and number divisible by current number and as long as there is number left that is divisible
    while((isPrime(i) === true && number % i === 0)) {
      // push the prim factor to the array
      primeFactorList.push(i);
      // then assign the divided number to number and back to main for loop
      number = number / i;
    }
  }
  // once number is depleted in the for loop, stop and return the last value in the list
  return primeFactorList[primeFactorList.length -1];
};

// console.log(largestPrimeFactor(600851475143));