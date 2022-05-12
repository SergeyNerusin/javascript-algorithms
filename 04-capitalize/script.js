/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/
/* jshint esversion: 6 */ 
function capitalize(str) {
    // Напишите код здесь
    const newStr=str.replace(/ +/g, ' ').trim().split(' ');
    // console.log(`newStr ${newStr}`);
    if((newStr != " ") && (newStr != "")){
        for(let i=0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase();}
        return newStr.join(' ');
    } else {
        return '';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(capitalize(' '));
console.log(capitalize('молодость     всё простит')); // "Молодость Всё Простит" 
console.log(capitalize('ДОРОГА   ДОМОЙ')); 
