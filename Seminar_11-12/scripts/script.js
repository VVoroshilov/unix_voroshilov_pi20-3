// Task 1
console.log("Задание 1")

const city1 = {
    name: "Город N",
    population: 10**7
};
console.log(city1);


// Task 2
console.log("Задание 2")

const city2 = {
    name: "Город M",
    population: 10**6
};
console.log(city2);


// Task 3
console.log("Задание 3")

city1.getName = function(){
    return city1.name;
};

city2.getName = function(){
    return city2.name;
};

console.log(city1.getName());
console.log(city2.getName());


// Task 4
console.log("Задание 4")

city1.exportStr = function(){
    let obj_str = "";
    for(key in city1){
        if(typeof(city1[key]) != "function"){
            obj_str += key + " = " + city1[key] + "\n";
        }    }
    return obj_str;
};

city2.exportStr = function(){
    let obj_str = "";
    for(key in city2){
        if(typeof(city2[key]) != "function"){
            obj_str += key + " = " + city2[key] + "\n";
        }
    }
    return obj_str;
};

console.log(city1.exportStr());
console.log(city2.exportStr());


// Task 5

// Судя по названию методов и необходимости возврата this, требовалось создать метод, который возвращал бы объект. 
console.log("Задание 5")

function getObj(obj){
    return obj;
}


city1.getCity = function(){
    return getObj(this);
}

city2.getCity = function(){
    return getObj(this);
}

console.log(city1.getCity())
console.log(city2.getCity())

// Task 6 

// Task 7
console.log("Задание 7")

d1 = [45, 78, 10, 3]
d1[7] = 100
console.log(d1)
console.log(`d1[6] = ${d1[6]}, d1[7] = ${d1[7]}`)

// Task 8 
console.log("Задание 8")

d2 = [45, 78, 10, 3]
sum2 = 0 
for(ind in d2){
    sum2+= d2[ind]
}
console.log(`sum2 = ${sum2}`)

// Task 9 
console.log("Задание 9")

d3 = [45, 78, 10, 3]
d3[7] = 100
sum3 = 0 
for(ind in d3){
    sum3+= d3[ind]
}
console.log(`sum3 = ${sum3}`)

// Task 10
console.log("Задание 10")

d4 = [45, 78, 10, 3]
console.log(`d4 unsorted = ${d4}`)
function my(a,b){
    return b - a;
}

d4.sort(my)
console.log(`d4 sorted = ${d4}`)


// Task 11


// Task 12
console.log("Задание 12")

class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vector){
        return new Vector(this.x + vector.x, this.y + vector.y)
    }

    minus(vector){
        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    get length(){
        return (this.x**2 + this.y**2)**0.5
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length)


// Task 13
console.log("Задание 13")

// Непонятно, о каких классах идёт речь в задании
// Своё предположение отобразил в коде ниже
// TextCell получает в инициализатор текст
// Ширина текста - длина наибольшей подстроки, отедлённой знаками переноса строки
// Высота текста - количество встреченных символов переноса строки \n + 1
class TextCell{
    constructor(text){
        this.height_ =  (text.match(/\n/g)||[]).length + 1;
        this.text = text;
        this.text_arr = text.split(/\n/g);
    }
    
    get width(){
        return this.text_arr.sort(
            function (a, b) {
                return b.length - a.length;
            }
        )[0].length
    }

    get height(){
        return this.height_;
    }
}

console.log(new TextCell('aabc').height)
console.log(new TextCell('aabc').text)
console.log(new TextCell('aabc').width)
console.log(new TextCell('aabc\nfdf').height)
console.log(new TextCell('aabc\nfdf\n').height)


// Метод draw "дорисовывает" новые строки и достраивает строку до нужой длины с помощью массивов и пробелов
class StretchCell{
    constructor(inner, width, height){
        this.inner = inner;
        this.width = width;
        this.height = height;
    }
    
    get minWidth(){
        return this.width > this.inner.width ? this.width : this.inner.width
    }

    get minHeight(){
        return this.height > this.inner.height ? this.height : this.inner.height
    }

    draw(width, height){
        let art = [];
        let text_p = this.inner.text.replace(/\n/g, "");
        if (width >= this.minWidth && height >= this.minHeight){
            for(let i = 0; i < height; i++){
                if(text_p.length >= width){
                    art.push([text_p.substring(0, width)]);
                    text_p = text_p.substring(width);
                }
                else{
                    art.push([text_p + "\xa0".repeat(width - text_p.length)]);
                }
            }
            return art;
        }else{
            return [];
        }
    }
}

let sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth)
console.log(sc.minHeight)
console.log(sc.draw(3, 2))



// Task 14 
console.log("Задание 14")

// Интерфейс предоставляет следующие возможности:
// Получить следующий элемент
// Получить предыдущий элемент
// Получить текущий элемент
// Получить индекс текущего элемента
// Получить длину последовательности
// Получить элемент по индексу
class ArraySeq{
    constructor(arr){
        this.arr = arr;
        this.index_v = -1; // Первоначально индекс имеет значение -1, чтобы при первой итерации (метод next) мы получили 0-й элемент массива
    }

    next(){
        this.index_v ++;
        return this.arr[this.index_v];
    }

    previous(){
        this.index_v--;
        return this.arr[this.index_v];
    }

    current(){
        return this.arr[this.index_v];
    }

    get index(){
        return this.index_v;
    }

    get length(){
        return this.arr.length;
    }

    by_index(ind){
        return this.arr[ind];
    }
}


class RangeSeq{
    constructor(from = 0, to = 0){
        this.from = 0;
        this.to = 0; 
        this.index_v = -1 // Первоначально индекс имеет значение -1, чтобы при первой итерации (метод next) мы получили 0-й элемент массива
        this.arr = [];
        for(let i = from; i < to; i++){
            this.arr.push(i);
        }
    }

    next(){
        this.index_v ++;
        return this.arr[this.index_v];
    }

    previous(){
        this.index_v--;
        return this.arr[this.index_v];
    }

    current(){
        return this.arr[this.index_v];
    }

    get index(){
        return this.index_v;
    }

    get length(){
        return this.arr.length;
    }

    by_index(ind){
        return this.arr[ind];
    }

}

function logFive(iterator){
    let range = iterator.length >= 5 ? 5 : iterator.length;
    for( let i = 0; i < range; i++){
        console.log(iterator.next())
    }
}


logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 1000))

// Task 15
console.log("Задание 15")
function Card(from, to){
    card = {
        from: from,
        to: to
    };
    card.show = function(){
        return card.from + ', ' + card.to;
    };
    return card;
}

c1 = Card("Екатеринбург", "Москва")
console.log(c1.show())


// Task 16
console.log("Задание 16")

class Human{
    constructor(name, age, height){
        this.age = age;
        this.height = height;
        this.name = name; 
    }

    get firstname(){
        return this.name;
    }

    getInfo(){
        return this.name + ", " + String(this.age) + ", " + String(this.height);
    }
}

humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)

]

for(ind in humans){
    console.log(humans[ind].firstname + ": " + humans[ind].getInfo())
}


// Task 18
console.log("Задание 18")

dt1 = new Date(2045, 0, 1)
console.log(dt1)

// Task 19

console.log("Задание 19")

dt2 = Math.floor(Date.now() / 1000)
console.log(dt2)

// Task 20

console.log("Задание 20")
// Используем свойство объекта Date
// По сути, мы указали 0-й день следующего месяца. Поэтому Date поставит последний день предыдущего месяца, то есть указанного в функции!
function getDays(year, month){
    return new Date(year, month, 0).getDate();
}
console.log(getDays(2004, 2))
console.log(getDays(2005, 2))
