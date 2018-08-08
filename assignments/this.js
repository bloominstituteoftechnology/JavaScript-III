/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If there is nothing to the left of the dot; and .call, .apply, .bind, and the 'new' keyword are not being used, then JS is going to default 'this.' to referencing the window object. If no other rules are met, then JS defaults to refe

* 2. Implicit Binding - the most common rule. Implicit binding says that when you call a function and when the function is invoked, look to the left of the dot and that is what the 'this' keyword is going to reference.

* 3. New Binding - when invoking a function with the 'new' keyword, it is creating a new object for you and you will have the ability to call it using 'this.' If a function was called with 'new' then the 'this' keyword is referencing that new object that it created.

* 4. Explicit Binding - It occurs when .call(), .apply(), or .bind() are used in a function. It is called explicit because it involves passing in a 'this' keyword to 'call' or 'apply'.

*
* write out a code example of each explanation above
*/
// Principle 1, Window Binding
// code example for Window Binding
this.age = 24;
function sayAge(age) {
  console.log(this.age)
}
sayAge(age);

// Principle 2, Implicit Binding
// code example for Implicit Binding
const me = {
    'name': 'Lucas',
    'age': '24',
    sayName: function(){
        console.log(this.name);
    }
};
me.sayName();

// Principle 3, New Binding
// code example for New Binding
const Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};
const zebra = new Animal('black and white', 'Rex', 'Zebra');
zebra.color;

// Principle 4, Explicit Binding
// code example for Explicit Binding
const sayName = function() {
    console.log('My name is ' + this.name);
}
const me = {
    'name': 'Lucas',
    'age': 24
};
sayName.call(me);