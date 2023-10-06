//Build sample Typescript file(Create file )
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(user);
document.body.textContent = greeter(user);
// tsc.greeter.ts using this command line ,run the TypeScript compiler
// Types By Inference
var myWorld = "To My World";
console.log("Welcome", myWorld);
//Defining Types
//To create an object with an inferred type which includes name: string and id: number
var user1 = {
    name: "Ram",
    id: 0,
};
console.log("user", user1);
console.log(user1);
var userr = {
    username: "harish",
    id: 0
};
