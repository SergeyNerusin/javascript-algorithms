/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/
/* jshint esversion:6 */ 
function countZeros(n) {
    // Напишите код здесь
    let result = 0;
    if (n !== 0 && n >= 10){
      const numberRow =[];
      const count10 = Math.round(n/10);
      for(let i = 1; i <= count10; i++){
           numberRow.push(i*10);
      }
      const simNumber = String(numberRow).split('');
      result = simNumber.reduce((count, el) => {
         if (el === '0'){count++;}   
         return count;
      },0);    
    }
     
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(342)); // 11*3 + 4 = 37 