/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Binding = if below rules don't apply, defaults to the window obj
        (unless in 'strict' js mode)
* 2.  Implicit Binding = look to the obj on left of the func call, which is bound to 'this'
* 3.  New Binding = when using contructor functions w/ 'new'
* 4.  Explicit Binding =  tells a func what 'this' keyword is using 
        call() = immediately invoke func // pass in arguments 1-by-1
            EX: myFunc.call(myObj, myArrIndex[0], myArrIndex[1] ) ;   
        //spread operator '...' calls array, dont need to call out individual items
                EX: myFunc.call(myObj, ...myArrIndex);
        apply() = immediately invoke func // pass in args as an array
        bind() = same as call(), but does not invoke func, but creates new function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const sayHello1 = function(){
    console.log(`Hello ${this.name}`)
}
const person1 = {
    name: 'Tristan'
};
//NOTE BELOW: no dot to left of invoke(), no Explicit(), no new
//above 'this' keyword is referencing the window object
sayHello1(); //returns 'Hello undefined'
////chrome dev tools EX below
// window.name = 'yo';
// sayHello();


// Principle 2

// code example for Implicit Binding
const parent = {
    name: 'Jessica',
    sayHello2: function(){
        console.log(`Hello ${this.name}`);
    },
        child: {
            name: 'Sophia',
            sayHello2: function(){
                console.log(`Hello ${this.name}`);
            }        
        }
}
//1st 'this' points to 'parent' obj
parent.sayHello2(); //returns 'Hello Jessica'
//2nd 'this' points to 'child' obj, or left of .sayHello2()
parent.child.sayHello2(); //returns 'Hello Spohia'


// Principle 3

// code example for New Binding
const PersonMaker = function(name, age, gender){
    //this.objKey = func parameter
    this.firstName = name,
    this.age = age,
    this.sex = gender
}
const larry = new PersonMaker('Larry', 33, 'M')
console.log(larry); //returns 'PersonMaker {firstName:'Larry',age:33,sex:'M'}


// Principle 4

// code example for Explicit Binding
const sayHello4 = function(){
    console.log(`Hello ${this.name}`)
}
const person4 = {
    name: 'Tristan'
};
sayHello4.call(person4); //returns 'Hello Tristan'

