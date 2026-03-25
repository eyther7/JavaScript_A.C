/*

Loops


For Loops ****************************

for (let i = 1; i <= 5; i++) {
console
}



for (let c = 1; c <= 100; c++) {
    console.log("Eyther") // print 6 times
}





let sum  = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum+i;
}
console.log("sum =", sum) //  sum = 55


for (let i = 1; i <= 20; i++) {
    console.log("i =", i) // print 1 - 20 all number
}





while loops **************my first self thinking loops ***************************


console.log("lets start...")
 let i = 3;
 while (i >= 0) {
    console.log(".....", i);
    i--;
 }
 console.log("Go...!")






do while loops    ************************

let i = 1;

do {
    console.log("i =", i); // count 1-5
    i++;
}while(i <= 5);




for of  loops [string & array] *******************


let str = "Eyther";

for (let i of str) {
    console.log("let index of str :-", i); //for print every index
}


let str = "Eyther";
let lnt = 0;
for (let i of str) {
    
    console.log("let index of str :-", i); //for print every index
    lnt++;
}
console.log("length =", lnt); //length count




for in loops [obect*****************************

let obj = {
    name: "eyther",
    age: "24",
    cgpa: "7.77",
    isPass: true,
 };

 for (let key in obj) {
    console.log("key =", key); //find key in obj
    console.log("let",key,"key value =", obj[key]) //find key value in obj
 }








practice***********************************

//Qs 1 = print all evan number from 0 to 100

for (let i = 0; i <= 100; i++) {
    console.log(i); //for print all number from 1 - 100
    if (i%2 === 0) {
        console.log("the even number=", i) //for print all even number from 1 - 100
    }
}



//Qs 2 = number guess game

let getNum = prompt("guess a number between 1 - 100.");
let num = 17;



while(getNum != num) {
getNum = prompt("wrong! guess a number between 1 - 100.");
}
console.log("Hurray you made it!");

 


















String  --------------------------------

creat string
let str = "string";


string length
str.leangth


string indics
str[0],str[1]


sting method  *** 

58:34mnt
*/

