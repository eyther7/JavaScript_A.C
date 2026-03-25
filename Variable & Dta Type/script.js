console.log("hello world");

name = "tony Stark";
console.log(name)


isFollow = false;
console.log(isFollow)


// block scop

{
    let a = 20;
    //console.log(a)
    //  let a = 30; not define same var in a block
 }
 {
    let a = 30;
    //console.log(a)
    //  let a = 30; have to make a new block
 }  

 /// object

 const student = {
    name : "tonmoy",
    age : 25,
    cgpa : 8.3,
    isPass : true,
 };
//student.age = student.age + 1 //for upd obj key
 //console.log(student["age"]);
 //console.log(student.age)