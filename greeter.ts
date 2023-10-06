//Build sample Typescript file(Create file )
function greeter(person) {
  return "Hello, " + person;
}
let user = "Jane User";
console.log(user)
 
document.body.textContent = greeter(user);
// tsc.greeter.ts using this command line ,run the TypeScript compiler


// Types By Inference
let myWorld = "To My World"
console.log("Welcome",myWorld)


//Defining Types
//To create an object with an inferred type which includes name: string and id: number
const user1 ={
  name: "Ram",
  id : 0,
}
console.log("user",user1)

// exaplicitly describe this objects shape using an interface declaration
interface user1 {
  name: string;
  id : number;
}
console.log(user1)

//object doesn't match the interface we provided then it will show the error
//for Example:
interface user2{
  name: string;
  id: number;
}
const userr : user2 ={
  username: "harish",
  id: 0
};
//Error: Type '{ username: string; id: number; }' is not assignable to type 'user2'. Object literal may only specify known properties, and 'username' does not exist in type 'user2'.