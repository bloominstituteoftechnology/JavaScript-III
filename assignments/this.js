/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When we are not using any other principles it will be in window binding (default binding)
* 2. It occurs when calling a function in object
* 3. It is considered as constructor call
* 4. It occurs when .call(), .apply() or .bind() are used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.name = "xyz"

function getName (){
    console.log(this.name)
}

getName()

// Principle 2

// code example for Implicit Binding

function speak (){
    return this.objName;
}

const obj = {
    objName: 'obj',
    speak: speak
}

console.log(obj.speak())

// Principle 3

// code example for New Binding

function person (name){
    this.name = name
}

console.log(new person("xyz").name)

// Principle 4

// code example for Explicit Binding
const obj2 = {
    objName: 'obj2',
}

console.log(speak.call(obj2));