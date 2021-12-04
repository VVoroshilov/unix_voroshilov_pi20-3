// Task 1
// Получаем ввод от пользователя и проверяем, чтобы он ввёл число большее 0. 
// Если он введёт строку или неподходящее число, выводим только один символ # 
// Я решил сделать такую реализацию, так как данный случай не описывался в задании

// let userPrompt = prompt("Введите число, большее 0", 1);
// let size = Number(userPrompt) > 0 ?  Number(userPrompt):1;
// let pic = "#";
// do{
//     console.log(pic);
//     pic += "#";
// }while(pic.length <= size)


// Task 2
for (let i = 1; i < 101; i++){
    let div3 = i % 3 == 0;
    let div5 = i % 5 == 0;

    // Не работает switch на проверку нескольких ключей, поэтому тут такой забавный костыль)))) 
    switch (String(div3) + String(div5)) {

        case "truefalse":
            console.log("Fizz");
            break;


        case "falsetrue":
            console.log("Buzz");
            break;


        case "truetrue":
            console.log("FizzBuzz");
        break;
        

        case "falsefalse":
            console.log(String(i));
            break;
    }
}


// Task 3 
let symbols = ["#", " "];
let table = "";
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        table += symbols[table.length % 2];
    }
    table += '\n';
}
console.log(table);


// Task 4

function min(arg_1, arg_2){
    if(arg_1 > arg_2){
        return arg_2;
    }else{
        return arg_1;
    }
}

console.log(min(0, 1));


// Task 5

// Напишу функцию в общем виде (функция для поиска символа в строке)
    
function countChar(str, char){
    let counter=0;
    for (let i=0; i<str.length; i++){
        if(str.charAt(i)==char){
            counter++;
        }
    }
    return counter;
}

console.log(countChar("abcdefgABCDEFGacbdefg", "b"));


// Task 6
    
function range(start = 0, end, step=1){
    if(end == undefined){
        end = start;
        start = 0;
    }
    let range_arr = [];
    for (let i = start; Math.abs(end - i + step) > Math.abs(step); i += step){
        range_arr.push(i);
    }
    return range_arr;
}
console.log(range(10));
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(2, 5, 1));
console.log(range(5, 2, -1));

function sum(range_arr){
    let result = 0;
    for (let i = 0; i < range_arr.length; i++){
        result += range_arr[i];
    }
    return result;
}

console.log(sum(range(1, 10)));


// Task 7

function reverseArrayInPlace(arr){
    let len = arr.length - 1;
    let mid = (len - (len % 2)) / 2;
    let switcher;
    for(let i = 0; i <= mid; i++){
        [arr[i], arr[len - i]] = [arr[len - i], arr[i]]
    }
}


function reverseArray(arr){
    let len = arr.length - 1;
    let result = [];
    for(let i = 0; i <= len; i++){
        result[i] = arr[len - i];
    }
    return result;
}

let arrray = [1, 2, 3, 4, 5];
console.log(arrray);
console.log(reverseArray(arrray));
console.log(arrray);
console.log(reverseArrayInPlace(arrray));
console.log(arrray);


// Task 8

function arrayToList(arr){
    let list = {
        value: arr[0],
        rest: arr.length == 1 ? null : arrayToList(arr.slice(1))
    }
    return list;
}

let list_v = arrayToList([1, 2, 3, 4, 5])
console.log(list_v);


function listToArray(list){
    let result = [];
    result.push(list.value);
    if(typeof list.rest != "object" || list.rest == null){
        result.push(list.rest);
    }else{
        result.push.apply(result, listToArray(list.rest))
    }
    if (result[result.length - 1 ] == null) {
        result = result.slice(0, result.length - 1 )
    }
    return result;
}


console.log(listToArray(list_v))

function prepend(element, list){
    let result = {
        value: element,
        rest: list
    }
    return result;
}

console.log(prepend(10, list_v))


function nth(list, index){
    return listToArray(list)[index];   
}

console.log(nth(list_v, 2));
console.log(nth(list_v, 2141421));


// Task 9

// Рекурсивный вызов работает только для итерируемых объектов (например, массивы)
function deepEqual(el_1, el_2){
    let result = true;
    if(el_1 != null && el_2 != null){
        if(typeof(el_1) == "object" && typeof(el_2) == "object"){
            for(let i = 0; i < el_1.length; i++){
                result = result && deepEqual(el_1[i], el_2[i]);
            }
        }else{
            return el_1 === el_2;
        }
    }else{
        result = el_1 === el_2;
    }
    return result
}


console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqual(listToArray(arrayToList([1, 2, 3])), listToArray(arrayToList([1, 2, 3]))));
console.log(deepEqual(listToArray(arrayToList([1, 2, 3])), listToArray(arrayToList([3, 4, 5]))));



// Task 10

function matrixToArray(matrix){
    return matrix.reduce(
        function(previousValue, currentValue){
            return previousValue.concat(currentValue);
        }
    )
}

console.log(matrixToArray([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]))



// Task 11

// Был прикреплён файлик JS, а не json. Поэтому я просто скопировал массив из файла. 
// var dataset = [
//     { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
//     { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
//     { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
//     { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
//     { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
//     { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
//     { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
//     { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
//     { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
//     { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
//     { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
//     { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
//     { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
//     { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
//     { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
//     { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
//     { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
//     { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
//     { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
//     { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
//     { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
//     { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
//     { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
//     { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
//     { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
//     { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
//     { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
//     { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
//     { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
//     { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
//     { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
//     { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
//     { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
//     { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
//     { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
//     { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
//     { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
//     { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
//     { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
// ]

import {dataset} from 'data.js';
var dataset = dataset;

function average(array){
    return array.reduce(
        function plus(a, b){
            return a + b;
        }
    ) / array.length;
}

var byName = {};
var diffs = []; // массив для хранения разностей возрастов
var dies = {}; // словарь для хранения массивов продолжительности жизней людей из каждого столетия 
dataset.forEach(
    function(person){
        let yearDeath = Math.ceil(person.died/100);
        if(yearDeath in dies){
            dies[yearDeath].push(person.died - person.born);
        }else{
            dies[yearDeath] = [person.died - person.born];
        }


        if(person.mother != null){
            let motherName = person.mother;
            let mother = person; // Костыль, чтобы избежать ошибок в строке 307
            let motherExist = false;
            for(let i = 0; i < dataset.length; i++){
                if(motherName == dataset[i].name){
                    mother =  dataset[i];
                    motherExist = true;
                    break;
                }
            }
            if(motherExist){
                byName[person.name] = [mother.born, person.born];
                diffs.push(person.born - mother.born);
            }

        }
    }
)

console.log(byName);
console.log(diffs);
console.log(average(diffs));



// Task 12
console.log(dies);
avrgLife = {}
for(let key in dies){
    avrgLife[key] = average(dies[key]);
}
console.log(avrgLife);



// Task 13

function every(array, func){
    let result = true;
    for(let i = 0; i < array.length; i++){
        result &&= func(array[i])
    }
    return result
}


function some(array, func){
    for(let i = 0; i < array.length; i++){
        if(func(array[i])){
            return true;
        }
    }
    return false;
}


console.log(every([NaN, NaN, NaN], isNaN))
console.log(every([NaN, NaN, 4], isNaN))
console.log(some([NaN, 3, 4], isNaN))
console.log(some([2, 3, 4], isNaN))