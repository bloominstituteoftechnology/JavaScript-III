/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding. // Console.log({this.name})
* 2. Implicit Binding.// this.name
* 3. Explicit Binding.//Myobj.call(firstObj,array) 
* 4. New Binding // const jerry = new CordialPerson()
*
* write out a code example of each explanation above
*/

// Principle 1
const name = "carlo";
console.log(name);
// code example for Window Binding

// Principle 2
const myObj = {
    "name": "carlo",
    "food": "potato",
    "speak": () => {
        console.log(`${this.name} likes ${this.food}`);
    }
}
myObj.speak();
// code example for Implicit Binding

// Principle 3
function Person(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
}
const carlo = new Person ({
    "name": "carlo",
    "age": 21
})
// code example for New Binding

// Principle 4
const developer = {
    "name": "carlo",
    "age":21
}
const skills = ['HTML', 'CSS' ,'JavaScript']

function aboutMe(){
    console.log(`${this.name} can do ${skills}`)
}
aboutMe.call(developer,skills);
// code example for Explicit Binding