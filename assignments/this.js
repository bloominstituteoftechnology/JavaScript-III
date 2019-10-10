/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function hello (name) {
    console.log(this);
    return `Hello ${this.name}`;
}
console.log(hello('Mike'))






// Principle 2
// code example for Implicit Binding

const myName = {
    fname: 'Mike',
    lname: 'Lovelace',
    say: function(){
        return `Hi, my name is ${this.fname} ${this.lname}`;
    }
}


console.log(myName.say());






// Principle 3
// code example for New Binding







// Principle 4
// code example for Explicit Binding

const person = {
    'name': 'Mike'
}

function introduction(html,css,js) {
    return `Hello, my name is ${this.name} and i like to program in: ${html}, ${css}, and ${js}`;
}
console.log(introduction.call(person,'html','css','js'));

