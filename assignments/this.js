/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. What I understand of "this" is it holds the value of a single object,
and is used inside a function or method to call that object.

The value held in "this" is the value of the object invoking the function,
 and quite frankly I don't understand a global 'this', as the this keyword operates in code the same as in english.

 Without an object you're refering to, a pronoun looses meaning. "This" used without
a referance ends up with the window, which seems pretty useless to me right now.

The usefulness of "this" seems to mainly be in the object constructors, which I
actially used in the pre-course work. We were told to "create an object", so I
got on w3 schools, and figured out how to use 'this' to make an object constructor.

It was way over my head, it was verry difficult difficult, and on top of that, the pre-course assignment 
wouldn't accept that answer XD

*
* write out a code example of each explanation above
*/

// Principle 1

//console.log(this===window);
//in a browser, would return true, in node, just gives me errors, since window isn't defined.

// code example for Window Binding

// Principles 2-4, and more probably. This is what I can do from scratch with my current skills.


creature.prototype.attack=function(target){
	console.log("The "+this.name+" attacks the "+target.name+" for "+(this.atk-target.def)+" damage.");
	return target.hp-=(this.atk-target.def);
}
creature.prototype.heal=function(){
	console.log("The "+this.name+" heals itself for 15 hp!");
	return this.hp+=15;
}
creature.prototype.hp_read=function(){
	var cap_name = this.name;
	cap_name=cap_name[0].toUpperCase()+(cap_name.slice(1));
	console.log(cap_name+" has "+this.hp+" hp left.");
}

//new creatures, with (name, hp, defence, attack)

var tiger = new creature('tiger',50,10,30);
var axolotl = new creature('axolotl',50,5,25);

//main function, loops a battle of any two creatures.

battler(tiger,axolotl);

function battler(creature1, creature2){
	var i=0;
	console.log(creature1);
	console.log('V.S');
	console.log(creature2);
		while (creature1.hp>0 && creature2.hp>0){
			console.log("Round "+(i+1));
		if(i%3===1){
			creature1.heal();
			creature1.hp_read();
			creature2.heal();
			creature2.hp_read();
			i++;
			}
		else{
		creature1.attack(creature2);
		creature2.hp_read();
		creature2.attack(creature1);
		creature1.hp_read();
		i++;
			}
		}
		if (creature1.hp<=0 && creature2.hp<=0){
			console.log("It's a draw!");
		}
		else if (creature1.hp<=0){
			var cap_name = creature2.name[0].toUpperCase()+(creature2.name.slice(1));
			console.log(cap_name+" wins!");
		}
		else{
			var cap_name = creature1.name[0].toUpperCase()+(creature1.name.slice(1));
			console.log(cap_name+" wins!");
		}
}
function creature(name,hp,def,atk){
	this.name=name;
	this.hp=hp;
	this.def=def;
	this.atk=atk;
}

