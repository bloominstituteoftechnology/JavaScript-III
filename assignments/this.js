/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Binding
 * 2. Implicit Binding
 * 3. New Binding
 * 4. Explicit Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
/*function sayName(name) {
    console.log(this);
    return name; //?
}
sayName("Moonchild");



// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Jim');


// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}


// Principle 4

// code example for Explicit Binding
*/

//This was take 1 for my playing around.
/*
class Student {
    constructor(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.city = obj.city;
        this.csClass = obj.csClass;
    };
}



Student.prototype.Intro1 = function () {
    let wholeName = (`${this.firstName} + ${this.lastName}`)
    return `HELLO WORLD!!!! \n
        My name is: ${wholeName}! But you can call me: ${this.firstName},\n 
        or ${this.lastName}, if you have military experience. Whatever works for you! \n
        I'm from ${this.city}, and I attend Lambda School in ${this.csClass}.\n 
        I'm testing a simple program I made to test my skills in Javascript lesson III.`
};

Student.prototype.Intro2 = function () {

    return `Hey, if you're reading this, it means you had second thoughts. \n
    I'm ${this.wholeName}, a student here. This can be either the greatest \n
    or worst experiece in your life. You need to think hard about what you want in life. \n
    This is not a place for those who second guess, those who can't swallow their pride, \n
    Those who are too immature to be responsible. This is a place for warriors of code.\n
    We have all taken some of the biggest risks you can take in life. \n
    Made sacrifices on the daily that your average 'Joe Citizen' would cry about.\n
    \n
    If you're already whining and second guessing, this isn't the place for you.`
}

class Skills extends Student {
    constructor(obj) {
        super(obj);
        this.skillz = obj.skillz
    }
};

Skills.prototype.brag = function () {
    return `I use these skills to get by: ${this.skillz}.`;
};

Skills.prototype.lament = function () {
    return `I have these skills: ${this.skillz} from birth and I still \n 
    struggle \n 
    every \n 
    single \n 
    day \n
    here.\n
    Like I said, forget everything you thought you knew about yourself.\n
    You are no longer the smartest person in the room, you are just a student now.`;
};

class Goals extends Skills {
    constructor(obj) {
        super(obj);
        this.goalz = obj.goalz
    }
};

Goals.prototype.fakeItTillYouMakeIt = function () {
    return `I really enjoy it here! \n 
    I've already learned alot! \n 
    Programming is more about thinking the right way, not necessarily knowing everything. \n
    Memorizing can only get you so far as well... \n 
    By the time I'm done, I hope to know how to ${this.goalz}.`
};

Goals.prototype.dontfakeit = function () {
    return (`I remember when I had free time, \n
    and money, \n
    and I didn't have nightmares about missing semicolons \(\;\)or  curly braces \(\{\}\).\n 
    Programming is more about thinking the right way, not necessarily knowing everything. \n
    But, you will need to know HOW to find whatever you don't know. Google-fu is a sought after skill. \n 
    By the time I'm done, I hope to know how to ${this.goalz}. \n
    But at the rate I'm going, I may not even make it out of month 1!`)
};


class Setbacks extends Skills {
    constructor(obj) {
        super(obj);
        this.setback = obj.setback;
    }
};

Setbacks.prototype.pushthroughyourproblems = function () {
    return `Getting here wasn't easy. I personally had ${this.setback} slow me down.\m
    But, if I can do it, so can you.`
};

Setbacks.prototype.yourproblemsaretoogreat = function () {
    return `Getting here wasn't easy. I personally had ${setback} slow me down.\m
    And that was probably a walk in the park compared to what you're more than likely going through.\n
    Maybe you should consider going to a community college instead.\n
    \n
    Like I said before. This program is for the best of the best. If you don't have the confidence to even try, \n
    turn around. There will be 5 people lined up to replace you. Not everyone is worthy of this opportunity.`
};


let genericYouCanDoThisSpeech = function () {
    return obj.Intro1() + obj.brag() +
        obj.fakeItTillYouMakeIt() + obj.pushthroughyourproblems()
}

let idontreallyknowspeech = function (obj) {
    return (Student.prototype.Intro2(obj) + Skills.prototype.lament(obj) +
        Goals.prototype.dontfakeit(obj) + Setbacks.prototype.pushthroughyourproblems(obj))
}

*/

//This is take two, I think it will be better
class UserBIO {
    constructor(obj) {
        this.firstName = obj.firstName;
        this.midi = obj.midi;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.countryOfOrigin = obj.countryOfOrigin;
        this.currentCountry = obj.currentCountry;
        this.city = obj.city;
        this.state = obj.state,
        this.userType = obj.userType;
        this.courseType = obj.courseType;
        this.cohortNum = obj.cohortNum
    };
}
UserBIO.prototype.wholeName = function (){
    return `${this.firstName} ${this.lastName}`
}
UserBIO.prototype.milName = function (){
    return `${this.lastName} + ${this.firstName}`
}

class PsycheInfo extends UserBIO {
    constructor(obj) {
        super(obj);
        this.learningStyle = obj.learningStyle;
        this.strengths = obj.strengths;
        this.weaknesses = obj.weaknesses;
        this.readingLevel = obj.readingLevel;
        this.highestEdcompleted = obj.highestEdcompleted;
    }
};

class CurrentKnowledge extends PsycheInfo {
    constructor(obj) {
        super(obj);
        this.pPe = obj.pPe
        this.yearspPe = obj.yearspPe
    }
};

class Blockers extends CurrentKnowledge {
    constructor(obj) {
        super(obj);
        this.biggestFear = obj.biggestFear;
        this.married = obj.married;
        this.kids = obj.kids;
        this.numOfKids = obj.numOfKids;
    }
};





UserBIO.prototype.Intro1 = function () {
    let wholeName = (`${this.firstName} + ${this.lastName}`)
    return `HELLO WORLD!!!! \n
        My name is: ${wholeName}! But you can call me: ${this.firstName},\n 
        or ${this.lastName}, if you have military experience. Whatever works for you! \n
        I'm from ${this.city}, and I attend Lambda School in ${this.csClass}.\n 
        I'm testing a simple program I made to test my skills in Javascript lesson III.`
};

UserBIO.prototype.Intro2 = function () {

    return `Hey, if you're reading this, it means you had second thoughts. \n
    I'm ${this.wholeName}, a Student here. This can be either the greatest \n
    or worst experiece in your life. You need to think hard about what you want in life. \n
    This is not a place for those who second guess, those who can't swallow their pride, \n
    Those who are too immature to be responsible. This is a place for warriors of code.\n
    We have all taken some of the biggest risks you can take in life. \n
    Made sacrifices on the daily that your average 'Joe Citizen' would cry about.\n
    \n
    If you're already whining and second guessing, this isn't the place for you.`
}


Skills.prototype.brag = function () {
    return `I use these skills to get by: ${this.skillz}.`;
};

Skills.prototype.lament = function () {
    return `I have these skills: ${this.skillz} from birth and I still \n 
    struggle \n 
    every \n 
    single \n 
    day \n
    here.\n
    Like I said, forget everything you thought you knew about yourself.\n
    You are no longer the smartest person in the room, you are just a student now.`;
};

Goals.prototype.fakeItTillYouMakeIt = function () {
    return `I really enjoy it here! \n 
    I've already learned alot! \n 
    Programming is more about thinking the right way, not necessarily knowing everything. \n
    Memorizing can only get you so far as well... \n 
    By the time I'm done, I hope to know how to ${this.goalz}.`
};

Goals.prototype.dontfakeit = function () {
    return (`I remember when I had free time, \n
    and money, \n
    and I didn't have nightmares about missing semicolons \(\;\)or  curly braces \(\{\}\).\n 
    Programming is more about thinking the right way, not necessarily knowing everything. \n
    But, you will need to know HOW to find whatever you don't know. Google-fu is a sought after skill. \n 
    By the time I'm done, I hope to know how to ${this.goalz}. \n
    But at the rate I'm going, I may not even make it out of month 1!`)
};

Setbacks.prototype.pushthroughyourproblems = function () {
    return `Getting here wasn't easy. I personally had ${this.setback} slow me down.\m
    But, if I can do it, so can you.`
};

Setbacks.prototype.yourproblemsaretoogreat = function () {
    return `Getting here wasn't easy. I personally had ${setback} slow me down.\m
    And that was probably a walk in the park compared to what you're more than likely going through.\n
    Maybe you should consider going to a community college instead.\n
    \n
    Like I said before. This program is for the best of the best. If you don't have the confidence to even try, \n
    turn around. There will be 5 people lined up to replace you. Not everyone is worthy of this opportunity.`
};










let genericYouCanDoThisSpeech = function () {
    return obj.Intro1() + obj.brag() +
        obj.fakeItTillYouMakeIt() + obj.pushthroughyourproblems()
}

let idontreallyknowspeech = function (obj) {
    return (Student.prototype.Intro2(obj) + Skills.prototype.lament(obj) +
        Goals.prototype.dontfakeit(obj) + Setbacks.prototype.pushthroughyourproblems(obj))
}









const id0001 = new Student({
    firstName: `Mykeal`,
    lastName: `Kenny`,
    city: `Orlando`,
    csClass: 10,
    skillz: [`
    trained attention to detail`,
        `undying dedication`,
        `and ability to admit fault and take responsibility.`
    ],
    goalz: [`to be more than just your run of the mill average developer,`, `to be able to carry my skills into the world and help fix it,`, `and to be taken seriously when I have an idea.`],
    setback: [`6 kids,`, `pending court case for custody of 1 of them,`, `high school drop-out`, `college drop-out`, `never had anyone believe in me,`, `and no other options left.`]
});

/*const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });
*/
console.log(id0001.genericYouCanDoThisSpeech())
console.log(id0001)

/*#########################################################################################################################################*/
//For reference
// console.log(this);


// === Principle 1: Window/Global Binding ===

// function sayName(name) {
//   console.log(this);
//   return name; //?
// }
// sayName("Moonchild");


// === Principle 2: Implicit Binding ===

// const myObj = {
//   greeting: 'Hello',
//   sayHello: function(name) {
//     console.log(`${this.greeting} my name is ${name}`);
//     console.log(this);
//   }
// };
// myObj.sayHello('Jim');

// === Principle 3: New Binding ===

// function CordialPerson(greeter) {
//   this.greeting = 'Hello ';
//   this.greeter = greeter;
//   this.speak = function() {
//     console.log(this.greeting + this.greeter);
//     console.log(this);
//   };
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// newman.speak();
// newman.speak();

// === Principle 4: Explicit Binding ===

// .call, .apply, .bind

// let sayName = () => {
//   console.log('My name is: ' + this.name);
// };

// CALL

// let me = {
//   name: 'Josh',
//   age: 33
// };

// let sayName = function(skill1, skill2, skill3) {
//   console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
// }

// let skills = ['HTML','CSS','JS'];

// sayName.call(me, skills);
//sayName();
//sayName.call(me, ...skills );

// APPLY - Just like call but it will iterate over each item in an array!
// let me = {
//   name: 'Josh',
//   age: 33
// };

// let sayName = function(skill1, skill2, skill3) {
//   console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
// }

// let skills = ['HTML','CSS','JS'];

// sayName.apply(me, skills );

// BIND - Returns a function with same functionality of call
/*
let me = {
    name: 'Josh',
    age: 33
};

let skills = ['HTML', 'CSS', 'JS'];


let sayName = function (skill1, skill2, skill3) {
    console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3);
}

let newFunction = sayName.bind(me, ...skills);

newFunction(); */