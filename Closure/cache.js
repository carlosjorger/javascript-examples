export var isPrime = (function hideTheCache() {
  var primes = {};

  function isPrime(v) {
    function saveOnPrimes(result) {
      return (primes[v] = result);
    }
    if (v in primes) {
      return primes[v];
    }
    if (v <= 3) {
      return saveOnPrimes(v > 1);
    }
    if (v % 2 == 0 || v % 3 == 0) {
      return saveOnPrimes(false);
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
      if (v % i == 0 || v % (i + 2) == 0) {
        return saveOnPrimes(false);
      }
    }
    return saveOnPrimes(true);
  }
  return isPrime;
})();
