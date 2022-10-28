/*var a = 70;
{
    let a = 10; // assign variable a .
    var b = 80;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
*/

/*let a = 10;
let b = 'string' ;
let c = true ;
let d = null ;
let e = undefined ;
let f = BigInt(896677555666);
let g = Symbol('avenger');
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
*/

/*let a = {
    num : 10 ,
    str : 'Hi' ,
    Bool : false 
}
console.log(a) ;
console.log(typeof a);

let b = [10,'hi',false,{a:1,b:'hi}] ;
console.log(b);
console.log(typeof b);
*/
/*
let num = 10 ;
console.log(num);
let num1 = 212.8830 ;
console.log(num1.toExponential(3));
let c = 'hello';
console.log(Number(c));

let num3 = 3/0 ;
console.log(num3);
*/

/*let a = null ;
let b;
console.log(a);
console.log(b);
*/
/* let a = 10 ;
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)
console.log(--a)
console.log(++a)
*/
/*let a = 10 ;
let b ='hi';
console.log(typeof a) ;
console.log(typeof b) ;

let c = '20';
let d = 'assemble' ;
console.log(+c) ;
console.log(+d) ;

let e = 4 ;
let f ='avengers assemble' ;
let g = 0 ;
console.log(!e) ;
console.log(!f) ;
console.log(!g) ;
*/
/*let a =10 ;
let b = 5 ;
console.log(a > b) ;
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b);
console.log(a != b);
console.log(a == 5);
console.log(b == 5);

*/


//console.log('Hello world');

/*let a = 10;
let b =10 ;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
*/
/*let a = 10;
let b = '5';
console.log(a == b);
console.log(a != b);
console.log(b == 5);
console.log(b === 5);
*/

/*let a = 20 ;
console.log(a += 10);
console.log(a -= 10);
console.log(a *= 5);
console.log(a /= 5);
console.log(a %= 5);
*/

/*let a = 20;
let b = '10';
let c = 'avengers';
console.log(a + b);
console.log(a + c);
console.log(b + c);
*/

/*let num = 2 ; // if condition ;
if(num === 1){
    console.log('one') ;
}
else{
    console.log('Unknown') ;
}
*/
/*let num = 4; // switch condition ;
switch(num){
    case 1 :
        console.log('one');
        break;
    case 2 :
        console.log('two');
        break;
    case 3 :
        console.log('three');
        break;
    default :
       console.log('unknown');
        
}
*/

/*let a = 15 ; // ternary operators
let b = 15 ;
let c = a > b ? (b > a ? 20 : -1) : 15 ;
console.log(c); 
*/

// for loop ;
/*for(let i = 0;i <= 3;i++){
    console.log(i);
}
*/

// while loop ;
/*let i = 0;
while(i <= 3){
    console.log(i);
    i++ ;
}
*/

/*let sum = 0;
for(let i = 0,j = 0;i < 10 & j < 10;++i,j = i+2){
    console.log(i);
    console.log(j);
    sum += i ;
}
console.log(sum);
*/

/*let i = 0; // break statement ;
while(i <= 6){
    if(i == 3){
        break ;
    }
    i = i + 1 ;
console.log(i);

}
*/
/*for(let i=0;i<10;i++){ // continue statement ;
    if(i === 3){
        continue ;
    }
    console.log(i);
}
*/

/*let i,j ;
for(i=1;i<=2;i++){
    for(j=1;j<=2;j++){
        if(i != j){
            continue ;
        }
    console.log(i,j);    
    }
}
*/

// function declaration
/*function greet(){
    console.log('Hello');
}
// function with parameter and return value 
function square(num){
    return num * num ;
}
// invoking function 
greet();
// argument vs parameter in function 
function square(num){ // function parameter 
    return num * num ;
}
let result = square(10); // function call & function with argument
// function expression 
let sayHi = function(){
    console.log('hi');
};
sayHi();
// function hosting
addEventListener(2,3);
function add(a,b){
    return a + b ;// only used when function declaration not suitable for function expression 
}

//global scope 
var nam = 'sk';
console.log(nam);
function print(){
    console.log(nam);
}
print();
// global scope
function some(){
    // local scope 1
    function someOther(){
        // local scope 2
    }
}
*/

// Array
/*const cities =['london','mumbai','chennai','bangalore','kerala'];
console.log(cities);
for(let i=0;i<cities.length;i++)
  console.log(cities[i]);*/
//array declaration
/*let values =['one','two','three'];
let num = [1,2,3];*/
// array creation 
/*let arr = new Array(3);
let arr1 = new Array('cat,dog');*/ 
// single dimension array
/*let a =['blue','green','yellow'];
console.log(a);
const myArray =['h','e','l','l','o'];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);*/
// 2D array
/*let items =[[2,31],
            [5,6],
            [7,8]];
    console.log(items[0][0]);
    console.log(items[0][1]);
    console.log(items[1][0]);
    console.log(items[1][1]);
    console.log(items[2][0]);
    console.log(items[2][1]);
    console.log(items);*/
// common operations
/*const cities =['london','mumbai','chennai','bangalore','kerala'];
let length =cities.length;
console.log(length);
for(let val of cities){
    console.log(val);
}*/


// object 
//literal 
/*const laptop = { make :'Dell',
                 model :'Alienware',
                 memory :['SSD','HDD'],
                 cores : 8 ,
                 memorySize :[256,512],
                 getModel : function(){
                    return this.model ;
                 }

};
const laptopObj = Object.create(laptop);
console.log(laptop.make);
console.log(laptop.model);
console.log(laptop.memory);
console.log(laptop.cores);
console.log(laptop.memorySize);
console.log(laptop);
console.log(laptop.getModel());
*/
// loop through object
/*const array_for_userdata = {
    name: 'Ben Accord',
    email: 'ben.english@example.com',
    age: 25,
    dob: '08/12/1996',
    active: true
   };
   for(const key in array_for_userdata){
    console.log(`${key}: ${array_for_userdata[key]}`);
   }
   */
  // object.keys method 
  /*const array_name_for_courses = {
    java: 15,
    javascript: 78,
   nodejs: 38,
   php: 96 };
   const key = Object.keys(array_name_for_courses);
   console.log(key);
   key.forEach((key, index) => {
    console.log(`${key}: ${array_name_for_courses[key]}`);
   });*/
   //object.entries method 
   /*const array_animals = {
    lion: 1,
    giraffe: 2,
    tiger: 3,
    elephant: 4
    };
    const entries = Object.entries(array_animals);
    console.log(entries);
   */
   // object.values method
   /*const array_of_animals = {
    lion: 1,
    horse: 2,
    giraffe: 3,
    elephant: 4
   };
   Object.values(array_of_animals).forEach(val=> console.log(val));*/
   // object.assign method 
  /* const laptop = {
    make: 'Dell',
    model: 'Alienware',
    memory: ['SSD', 'HDD'],
    cores: 8,
    memorySize: [256, 512],
   };
   const laptopObjCopy = Object.assign({},laptop);
   console.log(laptopObjCopy);
   */
  // JSON - javascript object notation 
  /*const data = {
    "car": "Audi",
    "models": ["Q7","Q5"],
    "launchYear": 2021,
    "price": [5000000, 3500000]
   };
   console.log(data);
   console.log(data.car);
   console.log(data.models[0]);
   */

// object function 
// object.freeze method
/*const obj ={
    prop : 'relevel'
};
Object.freeze(obj);
obj.prop = 'relevels';
console.log(obj.prop); */
// object.seal method 
/*const obj ={
    prop :'relevel'
};
Object.seal(obj);
obj.prop ='relevels';
console.log(obj.prop);
delete Object.prop;
console.log(obj.prop);*/
// object.isSealed function 
/*const obj ={
    prop : 'relevel'
};
console.log(Object.isSealed(obj));
Object.seal(obj);
console.log(Object.isSealed(obj));*/
//object.is method
//console.log(Object.is('sasen',"sasen"));

// Array map function
/*let arr =[1,2,3,4];
let output = arr.map(elem => elem*2 );
console.log(output);
let a =['hi','hai'];
let ans = a.map(elem => elem + 's');
console.log(ans);*/
// array filter
/*const arr =[100,200,300,400,500];
const out = arr.filter(value =>value <=300);
console.log(out);
var inputArr = [
    { "name": "Shanghai", "population": 2430000 },
    { "name": "Los Angeles", "population": 372621 },
    { "name": "New Delhi", "population": 2180000 },
    { "name": "Mumbai", "population": 1840000 },
    { "name": "Chicago", "population": 265598 },
    { "name": "Houston", "population": 2100263 },
];
var o = inputArr.filter((city)=> city.population >= 500000);
console.log(o);*/

// array reduce 
/*let ar =[1,2,3,4];
let b = ar.reduce((i,j) => i+j);
console.log(b);
let a = [1,2,3];
let br = a.reduce((i,j) => i+j,5);
console.log(br);
let array =[1,2,3,455];
let avg = array.reduce((i,j) => i + j ) / array.length;
console.log(avg);*/
// forEach function 
/*let arr = [1,2,3,4,5];
arr.forEach(val => console.log(val)); */
// array sort
/*let a =[2,1,5,7,4,3];
a.sort((a,b) => a-b);
console.log(a);
a.sort((a,b) => b-a);
console.log(a);*/
// Reverse function
/*let a =[1,2,3,4,5];
a.reverse();
console.log(a); */
// Array split
/*const str ='sasen';
const splitstr = str.split('');
console.log(splitstr); */
// array slice
/*const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2,4));*/
// object destructuring
/*let avenger = {
    realName: 'Tony Stark',
    city: 'California',
    heroName: 'Iron Man'
   };
   let realName = avenger.realName;
   let city = avenger.city;
   let heroName = avenger.heroName;
   console.log(realName);
   console.log(city);
   console.log(heroName);*/

   /*let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
   let { realName , city , heroName } = newAvenger;
   console.log(realName);
   console.log(city);
   console.log(heroName);*/

  /* let {realName , city , heroName} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
   console.log(realName);
   console.log(city);
   console.log(heroName);*/

  /* let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
   let realName,city,herName;
   {realName,city,heroName} = newAvenger;
   console.log(city); */
 /*let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
 let realName, city, heroName;
 ({realName,city,heroName} = newAvenger );
 console.log(realName + heroName + city); */
 /*let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
 let realName, location, heroName;
 ({realName : fooName , city : location , heroName : barName } = newAvenger );
 console.log(fooName);
 console.log(location);
 console.log(barName);*/

 /*let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
 let {realName = 'sasen' , location ='USA'} = newAvenger;
 console.log(realName);
 console.log(location);*/

 /*let prop = "realName";
 let {[prop] : foo} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
 console.log(foo);*/

 /*let newAvenger = {realName: "Tony Stark", city: ["California", "Malibu"], heroName: "Iron Man"};
 let {realName : foo, city: bar} = newAvenger;
 console.log(foo,bar); */

/* let newAvenger = {
    realName: "Tony Stark",
    location : {
    country: "USA",
    city: "California"
    },
    heroName: "Iron Man"
   };

   let {
    realName: foo,
    location: {
    country: bar,
    city : x
    },
   } = newAvenger;
   console.log(foo); // Tony Stark
console.log(bar); // USA
console.log(x); // California */

let newAvenger = {
    realName: "Tony Stark", country: "USA", city: ["California", "Malibu"], heroName: "Iron Man"
   };
   let {realName, country, ...restOfDetails } = newAvenger;
   console.log(realName); // "Tony Stark"
   console.log(restOfDetails); // { city: [ 'California', 'Malibu' ], heroName: 'Iron Man' }
