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

var isStrict = (function() { return !this; })();

// Principle 1
// code example for Window Binding
function printAddress(){
    console.log("Street: " + this.street + "\nCity: " + this.city + "\nZip Code: " + this.zip);
}

let street = "123 Main Street";
let city = "Baltimore";
let zip = 21020;

window.printAddress;

// Principle 2

// code example for Implicit Binding

function printInfo(){
    console.log("Id: " + this.id + "\nName: " + this.name + "\nEmail: " + this.email 
                + "\nPhone: " + this.phone);
}

let info = {
    id: 1001,
    name: "Saney Alam",
    email: "saney.alam.md@gmail.com",
    phone: "123 456-7890",
    printInfo: printInfo
}

info.printInfo();

// Principle 3

// code example for New Binding

function Student(id, name, dept){
    this.id = id,
    this.name = name,
    this.dept = dept,
    this.printStudentInfo = () => {
        console.log("Hi, My name is " + this.name + " with ID #" + this.id +
                    ". I am a student of " + this.dept + " department.");
    }
}

let student1 = new Student(001, "Saney Alam", "Computer Science");
let student2 = new Student(002, "Jannatul Ferdous", "BBA");

student1.printStudentInfo();
student2.printStudentInfo();

// Principle 4

// code example for Explicit Binding

const fswStudent1 = {
    id: 'FSW1010',
    name: 'Saney Alam',
    department: 'WEBPT8'
}

const subjects = ['CSS', 'Advanced CSS', 'JavaScript Foundation', 'Advanced JavaScript', 'React'];

function about(subjects){
    return `ID: ${this.id}  \nName: ${this.name} \nDepartment: ${this.department} \n Topic Covers: ${this.subjects}`;
}

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name} with Id ${this.id}, and I am studying  ${thing1}, ${thing2}, and ${thing3}. I am in  ${this.department}.`
  }


  console.log(tellUsAboutYourself.call(fswStudent1, ...subjects));

  console.log(about.call(fswStudent1, subjects));