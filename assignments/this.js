/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding - This would be a binding for this keyword that works on the highest, global level. Generally it should not be used
* 2. Implicit binding - This binding is more direct in that you pass an object directly into the 'this' binding 
* 3. New binding - Uses the this keyword when using a constructor function. this gets passed from the constructor function to the new object being created so keys match the new object creation.
* 4. explicit binding - This method is a way to directly (or explicitly) find this to a specific object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function test(me){
    console.log(this)
    return me
}
test('JP')
// Principle 2

// code example for Implicit Binding
function saysHello(name){
    console.log(`${this.greeting} my name is ${name}`)
}

const newObj = {
    'greeting': 'Hola',
    'saysHello': saysHello
}
newObj.saysHello('Joel')
// Principle 3

// code example for New Binding
function Person(name, age) {
    this.name = name,
    this.age = age
}

const joel = new Person({name: 'Joel', age: 34})
console.log(joel)

// Principle 4

// code example for Explicit Binding
saysHello.call({greeting: 'Yikes!'}, 'Joel')

const JP = saysHello.bind({greeting: 'Pssshhhh'}, 'Joel')
JP()