const myObj = {
    'greeting': 'hello',
    'jumps': 5,
    'sayHello': function (name) {
        return `Whats up, ${this['greeting']}, ${name}, ${this['jumps']}`;
    }
}

myObj.sayHello('Josh'); //? 


function CordialPerson(greeter) {
    this.greeting = 'hello';
    this.greeter = greeter;
    this.speak = function () {
        return this.greeting + ' ' + this.greeter;
    }
}

const jerry = new CordialPerson('Newman');

jerry.speak(); //?
const newman = new CordialPerson('Jerry');
newman.speak(); //?

let me ={
    'name': 'josh',
    'age': 33
};

let sayName = function(skill1, skill2, skill3) {
    return 'my name is: ' + this.name + ' i like to program with this stuff ' + skill1 + ' ' + skill2 + ' ' + skill3; //?
}
let skills = ['HTML', 'CSS', 'JS']; 
// sayName.call(me, skills[0], skills[1], skills[2]); //? 

sayName.call(me, ...skills);




function Parent (attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.hometown = attributes.hometown;
}


Parent.prototype.speak = function() {
    return `Hello my name is ${this.name}`; //? 
}

Parent.prototype.doMath = (a,b) => {
    return a+b;
}

const fred = new Parent ({
    'gender': 'M',
    'age': 35,
    'name': 'Fred',
    'hometown': 'bedrock',
});

const willma = new Parent ({
     'gender': 'F',
     'age': 37,
     'name': 'Willma',
     'hometown': 'bedrock',
});


fred.age //?
fred.speak() //?
willma.age //? 
willma.speak() //? 
fred.doMath(1,2); //?