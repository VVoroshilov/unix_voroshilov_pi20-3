let message = "Hello";
let var1 = "Var 1",
    age = 14,
    message2 = "World!";


let n=25;
let n1=25.5;

// Значение number
alert(1/0); //Infinity
alert(-Infinity);
alert("string" / 25); //NaN - вычислительная ошибка

// Number -(2^53)-1; (2^53)-1


// Big int 
const bigInt = 213124124124124125872n; //n - обязательно для bigInt



// String

let str = "Hello";

alert(`${str}, lol!`);// Аналог f''

// null эквивалентно None в Python
let none = null;

// undefined - когда переменной не присвоено значение
let arg;
alert(arg);


// Оператор typeof() определяет тип данных

let arg2 = 25;
alert(typeof arg2);
alert(typeof undefined);
alert(typeof alert);


// Взаимодействие с пользователем 


// Вывод сообщения 
alert(message); 


// второе значение - default, необязательное значение. Принмает ввод пользователя
let argInp = prompt("How old are you?", 0); 


// Получить бинарный ответ на вопрос
let resultConfirm = confirm("Some question?"); //True or False 
console.log(resultConfirm);


// Преобразование типов 

let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);
value = Number("2");
console.log(typeof value);

// Динамическая типизация

console.log('6' / '3');
console.log("1" + "2");
console.log("1" + 2);
console.log(1 + "2");


// Операторы

if (1 == 1.0){
    alert("1 == 1.0");
}else{
    alert("1 != 1.0");
}
// elif = else if(){}
// and = &&, or = ||

// & и | - обе части условия проверяются
// && и || - проверяет левую часть условия, если значение не зависит от остальной части


let yourAge = prompt("How old are you?", 0);
let access = yourAge >=18 ? true : false;
if (access){
    alert("Ты совершеннолетний!");
}else{
    alert("Ты слишком маленький!");
}


// while

let x = 0;
while (x<10){
    console.log(`x = ${x++}`);
}

// do while

do{
    console.log("Выполнилась первый и единственный раз!");
} while (x!= 10)


// for 

for (let i=0; i < 11; i++){
    console.log(`i = ${i}`);
    if (i==10){
        break;
    }else if(i == 9){
        continue;
    }
}

// switch 

let argum = "point 3"

switch (argum) {
    case "point 1":
        alert("switch 1 =(")
        break;
    case "point 2":
        alert("Switch 2 =)")
        break;
    default:
        alert("What is dis???")
        break;
}


// functions

function firstdef(message){
    alert(message);
    return message;
}

firstdef("Test!")