// HERO CLASS = Villians are heros too
function Hero(atts) {
    Humanoid.call(this, atts); //inherit Humanoid properties
    this.attacks = atts.attacks;
    this.messageTag = atts.messageTag;
    this.currentHitpointTag = atts.currentHitpointTag;
    this.maxHitpointTag = atts.maxHitpointTag;
    this.strengthTag = atts.strengthTag;
    this.strength = atts.strength;
    this.maxHitpoints = atts.maxHitpoints;
    this.bac = atts.bac;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(attacker, victim, atkNum) {
    let atk = {};
    if(atkNum === undefined) {
        atk = getRandomInt(attacker.attacks.length);
        atk = attacker.attacks[atk];
    }
    else {
        atk = attacker.attacks[atkNum];
    }
    if(atk.DMGenemy) victim.chgHitpoints(atk.DMGenemy);
    if(atk.DMGself) attacker.chgHitpoints(atk.DMGself);
    if(atk.STRenemy) victim.chgStrength(atk.STRenemy);
    if(atk.STRself) attacker.chgStrength(atk.STRself);
    if(atk.text) attacker.message(atk.text);
}
Hero.prototype.message = function(text) {
    if(document.getElementById("msg-ok")) document.getElementById("msg-ok").outerHTML = "";
    document.getElementById(this.messageTag).textContent = text;
}
Hero.prototype.chgHitpoints = function(val) {
    this.healthPoints += val;
    if(this.healthPoints > this.maxHitpoints) this.healthPoints = this.maxHitpoints;
    if(this.healthPoints < 0) this.healthPoints = 0;
    document.getElementById(this.currentHitpointTag).textContent = this.healthPoints;
}
Hero.prototype.chgMaxHitpoints = function(val) {
    this.maxHitpoints += val;
    document.getElementById(this.maxHitpointTag).textContent = this.maxHitpoints;
}
Hero.prototype.chgStrength = function(val) {
    this.strength += val;
    if(this.strength > 100) this.strength = 100;
    if(this.strength < 0) this.strength = 1;
    document.getElementById(this.strengthTag).textContent = this.strength;
}
Hero.prototype.chgBAC = function(val) {
    this.bac += val;
}
Hero.prototype.halved = function() {
    this.healthPoints /= 2;
    this.strength /= 2;
    document.getElementById(this.currentHitpointTag).textContent = this.healthPoints;
    document.getElementById(this.maxHitpointTag).textContent = this.healthPoints;
    document.getElementById(this.strengthTag).textContent = this.strength;
    this.message("");
}
//VILLIAN
const drHangover = new Hero({
    createdAt: new Date(),
    healthPoints: 1000,
    name: 'Dr. Hangover',
    strength: 10,
    attacks: [],
    messageTag: "msg-villian",
    currentHitpointTag: "villian-health-cur",
    maxHitpointTag: "villian-health-tot",
    strengthTag: "villian-strength-cur",
    bac: 0,
});
//VILLIAN ATTACKS
drHangover.attacks = [
    {   DMGenemy: -10,
        STRenemy: -10,
        text: `Dr. Hangover punches you in the gut; you feel nauseous. -10 health -10 strenth.`,
    },{ DMGenemy: -30,
        text: `Dr. Hangover tackles you to the ground. -30 health.`
    },{ DMGenemy: -5,
        text: `Dr. Hangover grabs ahold of you; his cold hands are cold and cause you to shake. -5 health.`
    },{ STRenemy: -10,
        text: `Dr. Hangover hands you a rubix cube; this is not the time for that. -10 strength.`
    },{ DMGenemy: 10,
        STRenemy: 10,
        text: `Dr. Hangover uses taunt; your heart begins to race. +10 strength.`
    },{ DMGenemy: -20,
        text: `Dr. Hangover opens the flashlight app on his phone. The glare is too much. -20 health.`
    },{ DMGenemy: -10,
        text: `Dr. Hangover drinks an ice cold glass of OJ in front of you. And no he's not sharing. Your cottenmouth intensifies. -10 health.`
},];
//HERO
const beercules = new Hero({
    createdAt: new Date(),
    name: 'Beercules',
    healthPoints: 100,
    maxHitpoints: 100,
    bac: 0,
    strength: 10,
    attacks: [],
    messageTag: "msg-hero",
    currentHitpointTag: "hero-health-cur",
    maxHitpointTag: "hero-health-tot",
    strengthTag: "hero-strength-cur",
});
beercules.endTurn = function() {
    drHangover.attack(drHangover, beercules);
    ok = false;
}

//ATTACKS
beercules.attacks = [
    {   DMGenemy: -20,
        text: `After taking a power nap you awake to find Dr. Hangover with 20 less hit points.`,
    },{ DMGenemy: -10,
        DMGself: 10,
        STRself: 10,
        text: `You devoir a burrito; the grease fills the empty void in your soul. You siphen 10 hit points from Dr. Hangover and gain 10 strength.`,
    },{ STRself: 50,
        text: `You crack open a cold one with the boys; you feel invigorated. +50 Strength.`,
},];

// LETS PLAY A GAME
window.onload = function() {
    document.getElementById("msg-ok").addEventListener("click", clickedOK);
}
let canAttack = true;
let isDead = false;
function clickedOK() {
    document.getElementById("atk-sleep").addEventListener("click", function() {
        if(canAttack) {
            beercules.message("");
            beercules.attack(beercules, drHangover, 0);
            canAttack = false;
            setTimeout(function() {
                drHangover.attack(drHangover, beercules);
                canAttack = true;
                if(beercules.healthPoints <= 0) gameOver("No sense getting up; you've already lost.");
            }, 1000);
        }
    });
    document.getElementById("atk-burrito").addEventListener("click", function() {
        if(canAttack) {
            beercules.message("");
            beercules.attack(beercules, drHangover, 1);
            canAttack = false;
            setTimeout(function() {
                drHangover.attack(drHangover, beercules);
                canAttack = true;
                if(beercules.healthPoints <= 0) gameOver("You can't burrito your way out of this one.");
            }, 1000);
        }
    });
    document.getElementById("atk-drink").addEventListener("click", function() {
        if(canAttack) {
            beercules.message("");
            beercules.attack(beercules, drHangover, 2);
            canAttack = false;
            beercules.chgBAC(10);
            setTimeout(function() {
                drHangover.attack(drHangover, beercules);
                canAttack = true;
                if(beercules.healthPoints <= 0) gameOver("Bruh! You're dead.");
                if(beercules.boa >= 100) gameOver("Your body couldn't handle this much bro'ness. Try again tomorrow.")
            }, 1000);
        }
    });
    beercules.halved();
    beercules.message("You wake up wondering where your clothes are. Dr. Hangover is staring at you from across the room. What happened last night? All stats are now halved.");
}
function gameOver(text) {
    //janky but it works
    setTimeout(function() {
        beercules.message("GAME OVER");
        document.getElementById("msg-hero").classList.add("gameOverText");
        drHangover.message(text);
        canAttack = false;
        isDead = true;
    },100);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }  