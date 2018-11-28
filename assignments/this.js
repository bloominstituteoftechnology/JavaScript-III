/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - binds 'this' to the Window object. Window being the browswer.
* 2. Implicit - binds 'this' to the object in which the method is being invoked on
* 3. New - binds 'this' to the new object the constructor function creates
* 4. Explicit -  whenever .call , .apply, .bind method is used then 'this' is explictely defined to the arugment passed in
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding

    function sayName(name){
        console.log(`Hello, this`)
        return name;
    }
    sayName('Mike')

// Principle 2 - Implicit Binding

    const user = {
        greeting: 'Hello',
        sayHello: function(name){
            console.log(`${this.greeting}, ${name}`)
        }
    }
    user.sayHello('Mike')

// Principle 3 - New Binding
    //New Person constructor
    function NewPerson(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.weight = attributes.weight;
        this.speak = function(){
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`
        }
    }//NewPerson

    const mike = new NewPerson({
        name: 'Mike',
        age: 33,
        weight: 2190
    });

    const joe = new NewPerson({
        name: 'Joe',
        age: 35,
        weight: 200
    });

    console.log(mike);
    console.log(mike.speak());
    console.log(joe)
    console.log(joe.speak());

// Principle 4 - Explicit Binding

console.log(mike.speak.call(joe));
console.log(joe.speak.apply(mike));