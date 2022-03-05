//Observe: no return type, no type on parameters

//Opgave 1
//1
function add(n1, n2){
    return n1 +n2;
}

const sub = function(n1,n2){
    n1 - n2
};

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//Opgave 2
//1
const array = ["lars","jan","peter","bo"];
const arrayWith3 = array.filter(a => a.length <= 3);

array.forEach(console.log)
//arrayWith3.forEach(console.log);

//2
array.map(a => a.toUpperCase()).forEach(a => console.log(a))

//3
function names(){
    const listNames = array.map(n => `<ul>${n}</ul>`).join("")
    return listNames.toString()
}
console.log(names())

//4
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//a
cars.filter(c => c.year > 1999).forEach(c => console.log(c))
cars.filter(c => c.make === "Volvo").forEach(c => console.log(c))
cars.filter(c => c.price < 5000).forEach(c => console.log(c))

