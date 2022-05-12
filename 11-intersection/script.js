/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/
/* jshint esversion: 6 */ 
function intersection(arr1, arr2) {
    // Напишите код здесь
    const num = arr1.filter((el) => {return arr2.includes(el);});
    
    const result = num.filter((item, index, array) => {
          return array.lastIndexOf(item) === index;});
    
 return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []