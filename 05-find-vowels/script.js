/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

/*jshint esversion: 6*/ 
function findVowels(str) {
  // Напишите код здесь
   const sample = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].join('');
   const result = Array.from(str.toLowerCase()).reduce((count, el) => {
      if (sample.includes(el)) { 
             count += 1; 
        }
        return count;
    },0);
    
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3