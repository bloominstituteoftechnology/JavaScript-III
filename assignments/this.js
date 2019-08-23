/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Without a scope this tries to go global
* 2. Implicit binding: it ties the object to inside the function or passed into it (block of scope)
* 3. New binding: to build new opjects
* 4. Explicit binding:holds value with a variable which can be called at a later time
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function name (newName){
    console.log(this);
    return newName;
}
name('Brian');

// Principle 2

// code example for Implicit Binding

const home= {
    greeting: 'Welcome Home',
    getHome: function(name){
        console.log(`${this.greeting} ${name}`)
    }
}
    home.getHome('Brian');


// Principle 3

// code example for New Binding

function Curb(akward){
    this.akward = akward,
    this.bad = `Pretty pretty pretty good`,
    this.speak = function(){
        console.log(`${this.akward} this is ${this.bad}`)
    }
}

const larry = new Curb('Jeff');

larry.speak();

// Principle 4

// code example for Explicit Binding

const who = {
    'name': 'Brian'
}

const work = [ 'manual labor', 'white collar', 'armed forces'];

const fun = ['beach', 'boating', 'hiking'];

function tellMeAbout (work1, work2, work3, fun1, fun2, fun3) {
    console.log(`Hello, my name is ${this.name} and for work I ${work1}, ${work2}, and ${work3} and for fun I: ${fun1}, ${fun2}, 
    and ${fun3}`)
}

tellMeAbout.call(who, ...work, ...fun);