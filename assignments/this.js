/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is when there is nothing on the left side when the function is invoked hence it defaults to window.
* 2. Implicit binding is when function is invoked the objejct before the dot is going to be what this defines.
* 3. New binding is when constructor fucntion is used and new creates a new object with the values in  the new object.
* 4. Explict is when call or apply method is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function pizzaType(name) {
    console.log(this);
    return name;
}

pizzaType("Pepperoni");

// Principle 2

// code example for Implicit Binding
const management = {
    name: 'antiGravDesign.sw',
    authority: 'management'  
}

const humanResources = {
    name: 'howToHireEffectively.pdf',
    authority: 'HR'  
}

const designFiles = function(obj) { 
    obj.deleteFiles = function() {
        console.log(`${this.name} is important, cannot delete because ${this.authority} overrides your authority`)
    }
}

designFiles(management);

designFiles(humanResources);

management.deleteFiles();
// one object at a time.
// humanResources.deleteFiles();




// Principle 3

// code example for New Binding
var Games = function(year, device, publisher) {
    this.year = year;
    this.device = device;
    this.publisher = publisher;
}

var Battlefield = new Games('2002', 'Windows/Xbox/Macintosh', 'EA')

// Principle 4

// code example for Explicit Binding

var myFunc = function(hobby1, hobby2, hobby3) {
    console.log(`this function is printing ${this.name} and he loves to do ${hobby1}, ${hobby2} and ${hobby3}.`)
    
}

var myObj = {
    name: 'peter'
}

var petersHobby = ['stamp collection', 'hiking', 'reading']


myFunc.call(myObj, petersHobby[0], petersHobby[1], petersHobby[2]);