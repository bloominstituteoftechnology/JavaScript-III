/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window- this is global. if we don't tell the "this" keyword what to do it will always go to the global scope. 
* 2. implicit- (method) most common. whatever is to the left of the invocation is where the this keyword pulls from
* 3. new binding- are constructor functions. in otherwords they are object creators.
* 4. explicit- or function methods:  call, apply, bind. You are bascially attaching or binding the this key word to an object by using a method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const newObj = {
    "age": this.age,
}

// Principle 2

// code example for Implicit Binding
const anotherObj = {
    'name': 'tom',
    'speak': function(){
      console.log(`My name is ${this.name}`);
  }
};
anotherObj.speak();

// Principle 3

// code example for New Binding

 function ThisFun(name){

    this.whatever = function(){
        console.log(`${name}s whatever`);
    };
}
const newWhatever = new ThisFun("Gilbert");
const notherNew = new ThisFun("Shep");
notherNew.whatever();
newWhatever.whatever();

// Principle 4

// code example for Explicit Binding
const oneMore = {
    'name': 'tom',
};

const speak = function () {
    console.log(`My name is ${this.name}`);
}

speak.call(oneMore);