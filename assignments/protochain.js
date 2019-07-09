// This is a prototype creation template based on the assignment

**************************************************************

*** Create Parent ***

function Parent (param){
    this.param1 = param.param1;
    this.param2 = param.param2;


*** Prototype creation ***
*** Parent prototypes for children to inherit ***

Parent.prototype.function = function() {
    return `whatever`

**************************************************************

*** Create Child ***

function Child(param){
    *Allow use of Parent functions*
    Parent.call(this, param);
    *Child info*
    this.param3 = param.param3;
    this.param4 = param.param4;

*** Create Child prototype based off of Parent ***
Child.prototype = Object.create(Parent.prototype)

*** Create Child prototypes for Grandchild to inherit ***
Child.prototype.function = function () {
    return `whatever`

**************************************************************

*** Create Grandchild ***

function Grandchild(param){
    *Allow use of Child functions*
    Child.call(this, param);
    *Grandchild info*
    this.param5 = param.param5;
    this.param6 = param.param6;
    }

*** Create Grandchild prototype based off of Child ***
Grandchild.prototype = Object.create(Child.prototype)

*** Create Grandchild prototype for GreatGrandchild/Objects to inherit ***
Child.prototype.function = function () {
    return `whatever`
