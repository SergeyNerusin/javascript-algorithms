/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

/* jshint esversion: 6 */ 
function fizzBuzz(num) {
    // Напишите код здесь
    if(((num % 3) === 0) && ((num % 5) === 0)){
        return 'fizzbuzz';
    } else if ((num % 3) === 0){
        return 'fizz';
    } else if ((num % 5)=== 0){
        return 'buzz';
    }
  return num;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
for(let i=1; i <= 35; i++){
    console.log(`${i}: ${fizzBuzz(i)}`);
}