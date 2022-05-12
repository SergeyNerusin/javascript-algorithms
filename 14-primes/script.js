/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/
/* jshint esversion: 6 */ 
function primes(num) {
    // Напишите код здесь
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if((number % i) === 0) {
       return false;} 
     }
   return true;
  }

  const simpleNumber=[];
  for (let i=2; i <= num; i++) {
    if(isPrime(i) === true) {
      simpleNumber.push(i);
    }
  }

  return simpleNumber; 
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
