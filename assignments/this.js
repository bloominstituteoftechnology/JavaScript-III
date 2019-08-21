/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: Strict mode. Results often undefined to prevent code break.

* 2. Implicit Binding: Auto, common. Function takes value left of 'this' in method objects.

* 3. New Binding: Uses 'new' to create an object 'this' refers to.

* 4. Explicit Binding: Uses 'call', 'apply' and 'bind' to refer directly to values.
*
* write out a code example of each explanation above
*/

    // Principle 1

function greet(){
    console.log(this.english);
}

const english = 'Hi.';
greet();



    // Principle 2

let spanish = {
    language: 'Spanish',
    hungry: 'hambre',
    sayHungry: function(){
        console.log(`Yo soy ${this.hungry}.`);
    }
}

spanish.sayHungry();


    // Principle 3

function sayBye(bye){
    this.phrase = bye;
}

let korean = new sayBye('Annyeonghaseyo!');
console.log(`${korean.phrase}`);


    // Principle 4

function sleep(){
    console.log(`I ${this.sleeping}.`);
}

let koreanVerbs = {
    eating: 'meokda',
    sleeping: 'jamda',
}

let spanishVerbs = {
    eating: 'come',
    sleeping: 'dorme',
}

sleep.call(spanishVerbs);
sleep.call(koreanVerbs);