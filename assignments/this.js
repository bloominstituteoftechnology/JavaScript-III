/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. keyword 'this' used in the global scope will refer to the console (in my case my terminal) object
* 2. using a dot with the this keyword will refer to the object that it's in
* 3. using the this keyword in a constructor will create a new trait for the object it's in
* 4. the this keyword can also be used to override what's already described in the object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding()
{
    console.log(this);
}
windowBinding();

// Principle 2

// code example for Implicit Binding
const Kramer =
{
    mainAction: "slides into Jerry's apartment",
    describeMainAction: function()
        {
            console.log(`Kramer always ${this.mainAction}.`);
        }
}
Kramer.describeMainAction();

// Principle 3

// code example for New Binding
function parseFullName(fullName)
{
    let nameArray = [];
    let firstName = "";
    let lastName = "";
    let i=0;
    while(fullName[i]!=' '&&i<fullName.length)
    {
        firstName += fullName[i++];
    }
    nameArray.push(firstName);
    if(i!=fullName.length)
    {
        i++;
        while(i<fullName.length)
        {
            lastName += fullName[i++];
        }
    }
    nameArray.push(lastName);
    return nameArray;
}
function seinfeldCharacter(fullName)
{
    this.nameArray = parseFullName(fullName);
    this.firstName = this.nameArray[0];
    this.lastName = this.nameArray[1];
    this.getIntoJerrysApartment = function()
    {
        console.log(`*buzzz* It's ${this.firstName}.`);
    }
}
const george = new seinfeldCharacter('George Costanza');
george.getIntoJerrysApartment();

// Principle 4

// code example for Explicit Binding
const elaine = new seinfeldCharacter('Elaine Bennet');
george.getIntoJerrysApartment.call(elaine);
elaine.getIntoJerrysApartment.apply(george);
                    
