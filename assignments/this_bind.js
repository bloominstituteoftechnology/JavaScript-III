var myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');   // Hello my name is Ryan ,   this refers to global scope, sees as variable never declared

var unbound_SayHello = myObj.sayHello('Joe');
unbound_SayHello();    // same as above