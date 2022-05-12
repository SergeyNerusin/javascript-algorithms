/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

/* jshint esversion:6 */ 
function anagram(str1, str2) {
  // Напишите код здесь
  const result = (str1.length === str2.length) && Array.from(str1.toLowerCase()).some((el, index) => {
        
        return (str2.toLowerCase()).includes(el) && (el !== str2[index].toLowerCase());
  });
    
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false