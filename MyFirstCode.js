// const fileSystem= require('fs');         //imports  the built in files system functionality to a varible for accessing it.
// const _=require('lodash');              // imports lodash as _
// fileSystem.writeFileSync('MyFile.txt','This is the first line i wrote to a file from node.js code.');  // params=>param1:'filename', param2:'content'

const { map } = require("lodash");

// /************************* Reference Type example ***************************/
// var person ={
//     name:"Ajosh",
//     Age:23,
//     hobbies:['Cricket','Audio books']
// };
// console.log("\n","Person : " ,person,"\n");

// var secondPerson=person;


// person.name='John';

// console.log("Second Person : " ,secondPerson,"\n");

// /************************* Object.assign example ***************************/

// var person ={
//     name:"Ajosh",
//     Age:23,
//     hobbies:['Cricket','Audio books']
// };
// console.log("\n","Person : " ,person,"\n");

// var secondPerson=Object.assign({},person);


// person.name='John';

// console.log("Second Person : " ,secondPerson,"\n");

// /************************* Object.assign example: Not a deep copy ***************************/

// var person ={
//     name:"Ajosh",
//     Age:23,
//     hobbies:['Cricket','Audio books']
// };
// console.log("\n","Person : " ,person,"\n");

// var secondPerson=Object.assign({},person);


// person.name='John';

// person.hobbies.push('Reading');

// console.log("Second Person : " ,secondPerson,"\n");

// /************************* deep copy using slice() for arrays ***************************/

// var person ={
//     name:"Ajosh",
//     Age:23,
//     hobbies:['Cricket','Audio books']
// };
// console.log("\n","Person : " ,person,"\n");

// var secondPerson= _.cloneDeepWith(person);


// person.name='John';

// person.hobbies.push('Reading');

// console.log("Second Person : " ,secondPerson,"\n");

/* 'this' in nodeJS */
// class MyClass
// {
//     constructor(){
//         this.myVariableOne=1;
//         console.log( this.MyFunction(2));
//     };
//     MyFunction(newVariable){
//         console.log(newVariable);
//        return(this.myVariableOne);
//     }
// }
// var myObject=new MyClass();
// /* 'this' in nodeJS eg1*/

// const person={
//     name:'Ajosh John',
//     yearOfBirth:2000,
//     age(){
//         return 2023-this.yearOfBirth
//     }
// }

// console.log(person.age());

// /* 'this' in nodeJS eg2*/

// const person={
//     name:'Ajosh John',
//     yearOfBirth:1999,
//     age:function()
//         {
//             return 2023-this.yearOfBirth
//         }
// };
// console.log(person.age());
// /* For loop with arrays*/
// let newArray= ['Red','Blue','Green','Black','Black'];
// for(let items of newArray)
// {
//     console.log(items);
// }

// /* Map loop with arrays*/
//let newArray= ['Red','Blue','Green','Black','Black']; //we can give const instead of let since array is a reference type. It shows error only if we try to change the locattion mapping pointer it wont be affected by tyhe change in vcalues in memory locations.
// console.log(newArray.map((mapItems,index,mapArray)=>"Item-"+index+" : "+mapItems +" in "+mapArray));
// console.log(newArray);
// /* Const with arrays*/
// const newArray= ['Red','Blue','Green','Black','Black'];
// let newArray2=['White','yellow','Violet'];
// newArray.push(newArray2);
// console.log(newArray);


// /* how to poreserve existing array but merging 2 arrays*/
// const newArray= ['Red','Blue','Green','Black','Black'];
// let newArray2=['White','yellow','Violet'];
// newArray.push(newArray2);
// console.log(newArray);
// newArray.pop();
// console.log(newArray);
// newArray2.forEach(x=>newArray.push(x)); // not a good practice
// console.log(newArray);

// /*****spread operator and rest opertor (...)  ******/

// // Both of them are actually an example of polymorphic operators like '+' which act as addition operator and concatination operator
// // '...' (3 dots) are used to represent them .

// const newArray=['Hi','Hello','Hey'];
// const newArrayV2=['Dear',...newArray];
// newArray.push('Sir/Madam')
// console.log(newArrayV2);
// console.log(newArray);
// // here it(...) act as a spread operator since its actually taking each operator from thew lists and adding them to the new array

// const DisplayName=function(...args){
//     return args;
// }

// console.log( DisplayName('Ajosh','Appu','Chacha'));

// // here it act as rest operator since its collecting all the arguments and passing into the list or anything we neeed to but them(like {},(),etc)

// /* destructuring*/
// const person={
//     name:'Ajosh John',
//     age:23,
//     gender:'male'
// };

// let { name , age}=person; // remember the property names must be matching with deconstructor properties or vice versa;
// console.log(name);
// console.log(age);

// const justArray=['hi','hello','hey'];
// let[salutation1, salutation2]=justArray; // for arrays precedence is use dto map as per index position ; where as in objects property name act as keys
// console.log(salutation1);
// console.log(salutation2);
// let [hi,hello]=justArray; //[] => for arrays ,{}=> for objects
// console.log(hi);
// console.log(hello);
// const justFunction=(profile)=>{
//     console.log(profile.name);
// }
// const justFunction2=({name})=>{
//     console.log(name);
// }
// justFunction(person);
// justFunction2(person);

// /********** Async calls ***********/
// //callback
// const MakeMT2SecDelay=callback=>{
//     setTimeout(() => {
//     callback("Done");
//     }, 3300)
// };

// const MakeMT5SecondDelay=function(){
//     setTimeout(()=>{
//         console.log("I took  3secs to start running")
//      MakeMT2SecDelay(response=>console.log(response));
//     },3000);
// }
// console.log("End comment=>Async")
// MakeMT2SecDelay(response=>console.log("hi"+response));
// MakeMT5SecondDelay();

//promise
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');