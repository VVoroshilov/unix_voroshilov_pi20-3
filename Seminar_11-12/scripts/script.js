// Task 1

const city1 = {
    name: "Город N",
    population: 10**7
};
console.log(city1);


// Task 2

const city2 = {
    name: "Город M",
    population: 10**6
};
console.log(city2);


// Task 3

city1.getName = function(){
    return city1.name;
};

city2.getName = function(){
    return city2.name;
};

console.log(city1.getName());
console.log(city2.getName());


// Task 4

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