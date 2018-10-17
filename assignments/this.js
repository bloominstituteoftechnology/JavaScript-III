/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. The keyword 'this' in the global scope refers to the Window/Global object binding
* 2. The keyword 'this' when using implicit binding refers to the object's properites and methods that object that used 'this' contains. Thus if the name of the object changed, this would still refer to the object's new name.
* 3. The keyword 'this'  refers to the constructor function's properties and methods
* 4. The keyword 'this' is explicitly defined by using .call() .apply() or .bind()
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this.name);

// Principle 2
// code example for Implicit Binding
{
    person = {
        "name":"Dan",
        "location":"US",
        "greeting":function(){
            return `Hello, I'm ${this.name}. I am from the ${this.location}.`;
        }
    }
    console.log(person.greeting());
}
// Principle 3
// code example for New Binding
{
    function Person(name,favFood){
        this.Name = name;
        this.Fav = favFood;
        this.Speak = function(){
            return `Hello! My name is ${this.Name} and I like ${this.Fav}!`
        }
    }

    chris = new Person("Chris","Pizza");
    alex = new Person("Alex","Lasagna");
    console.log(chris.Speak());
    console.log(alex.Speak());
}

// Principle 4
// code example for Explicit Binding

{
    dan = {
        "name":"Dan",
        "location":"US",
        "greeting":function(){
            return `Hello, I'm ${this.name}. I am from the ${this.location}.`;
        }
    }
    napoleon = {
        "name":"Napoleon",
        "location":"France"
    }


    console.log(dan.greeting.call(napoleon));
    //console.log(dan.call(napoleon,greeting));
}

{
    function Person(name,location){
        this.Name = name;
        this.Local = location;
    }
    function Greet(greeting,name,location){
        Person.call(this,name,location);
        saySomething = `${greeting}! I'm ${this.Name}. I'm from ${this.Local}`;
        return saySomething;
    }

    console.log(Greet("Hello","Drew","South America"));
}


// Try it by instantiating a person with Person()
{
    function Person(name,location){
        this.Name = name;
        this.Local = location;
    }
    function Greet(greeting,name,location){
        Person.call(this,name,location);
        saySomething = `${greeting}! I'm ${this.Name}. I'm from ${this.Local}`;
        return saySomething;
    }
    
   //drew = new Person("Drew","South America")
    //console.log(drew);

    //console.log(Greet("Hello","Drew","South America"));
}