
function Character (name) {
    this.name = name;
    this.health = 100;
}

Character.prototype.setSpecialMove = function(name, damage) {
    this.special_move = name;
    this.damage = damage;
}
 
Character.prototype.executeSpecialMove = function() {
   var tmp_damage = Math.round(Math.random() * this.damage);
   return this.special_move + `. Deals: ` + tmp_damage + ` damage!`;
}

//--------- HERO --------//

function Hero (name) {
    Character.call(this, name);
    this.health = 70;
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.executeSpecialMove = function() {
    var tmp_damage = Math.round(Math.random() * this.damage);
    return `Special move: ${this.special_move}. Deals: ${tmp_damage} damage!`;
}

//--------- VILLAIN ------//

function Villain (name){
    Character.call(this, name);
    this.health = 60;
}

Villain.prototype = Object.create(Character.prototype);
Villain.prototype.executeSpecialMove = function() {
    var tmp_damage = Math.round(Math.random() * this.damage);
    return `Special move: ${this.special_move}. Deals: ${tmp_damage} damage!`;
}


const batman = new Hero('Batman');
batman.setSpecialMove('Roundhouse kick', 10);

const robbin = new Villain('Robbin');
robbin.setSpecialMove('Punch', 5);

let characters = [];

characters.push(batman);
characters.push(robbin);

for (character of characters) {
    console.log(`I am ${character.name}`);
    console.log(character.executeSpecialMove());
    console.log(`\n`);
}




