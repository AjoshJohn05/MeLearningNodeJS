const fileSystem= require('fs');         //imports  the built in files system functionality to a varible for accessing it.
const _=require('lodash');              // imports lodash as _
fileSystem.writeFileSync('MyFile.txt','This is the first line i wrote to a file from node.js code.');  // params=>param1:'filename', param2:'content'

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

/************************* deep copy using slice() for arrays ***************************/

var person ={
    name:"Ajosh",
    Age:23,
    hobbies:['Cricket','Audio books']
};
console.log("\n","Person : " ,person,"\n");

var secondPerson= _.cloneDeepWith(person);


person.name='John';

person.hobbies.push('Reading');

console.log("Second Person : " ,secondPerson,"\n");