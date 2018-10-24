/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit: 'This' points to an object that a function is called on.
* 2. Explicit: When 'this' is set to point to a value using .call,.apply, or .bind.
* 3. (simple)Function call: when in 'non-strict' mode 'this' defaults to the global object(will be undefined)
* 4. New (binding): uses the 'new' keyword as a constructor for a new object that 'this' points to.
*
* write out a code example of each explanation above
*/

// #1  Simple Function call aka  Window Binding
let winderGlass = function(){
    console.log(this.stuff)
}
//should be undefined
winderGlass();


// #2 Implicit Binding
const lumpyPerson = {
    name : "Lumpy Space Princess",
    age : 16,
    shoutOut : function(){
        console.log(`My Name is ${this.name}!`)
    }
}
lumpyPerson.shoutOut();



// #3  New Binding
let cartoonBoy = function(name, age, crush){
    this.name = name;
    this.age = age;
    this.crush = crush
};
let finn = new cartoonBoy("Finn",17,"Princess Bubblegum");
console.log(finn);


// #4  Explicit Binding

sayName = function(){
    console.log(`Hello I am ${this.name}`);
}
greeting = function(item1,item2,item3){
    console.log(`Hello my name is ${this.name}, and I like to wear ${item1},${item2}, and ${item3}`);
}
let mySkills = ["Red high heels", "Red leotards", "Purple space hair"];
sayName.call(lumpyPerson);
greeting.apply(lumpyPerson,mySkills);