const drHangover = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 1000,
    name: 'Dr. Hangover',
    team: 'Not Good Cru',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'ughhhhh',
  });
drHangover.mana = 100;
drHangover.strength = 10;

drHangover.attack = function() {
    let atk = getRandomInt(drHangover.attacks.length);
    atk = drHangover.attacks[atk];
    beercules.chgHealth(-atk.health);
    beercules.chgStrength(-atk.strength);
    beercules.message(atk.text);
    ok = true;
}
drHangover.message = function(text) {
    document.getElementById("msg-villian").textContent = text;
}
drHangover.hit = function(hit) {
    this.healthPoints -= hit;
    document.getElementById("villian-health-cur").textContent = this.healthPoints;
}
drHangover.attacks = [
    {
        health: drHangover.strength,
        strength: 10,
        text: `Dr. Hangover punches you in the gut; you feel nauseous. -${drHangover.strength} health -10 strenth.`,
    },
    {
        health: 5,
        strength: 0,
        text: `You feel a slight ache move over you whole body as you try to move. -5 health.`
    },
    {
        health: 5,
        strength: 0,
        text: `Dr. Hangover grabs ahold of you; his cold hands are cold and causes you to shake. -5 health.`
    },
    {
        health: 0,
        strength: 10,
        text: `You're handed a rubix cube; this is not the time for that. -10 strength.`
    },
    {
        health: 0,
        strength: -10,
        text: `Dr. Hangover uses taunt; you're heart begins to race. +10 strength.`
    },
    {
        health: 20,
        strength: 0,
        text: `Dr. Hangover opens the flashlight app on his phone. The glare is too much. -20 health.`
    },
    {
        health: 10,
        strength: 0,
        text: `Dr. Hangover drinks an ice cold glass of OJ in front of you. And no he's not sharing. Your cottenmouth intensifies. -10 health.`
    },
]

const beercules = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 100,
  name: 'Beercules',
  team: 'MacLarens',
  weapons: [
    'Edward 40 Hands',
  ],
  language: 'ughhhhh',
});
beercules.maxHealth = 50;
beercules.strength = 100;
beercules.mana = 10;
beercules.maxMana = 5;
beercules.drunkeness = 0;

//ATTACKS
beercules.sleep = function() {
    drHangover.message(`After taking a power nap you awake to find Dr. Hangover with ${beercules.strength/2} less hit points.`);
    drHangover.hit(beercules.strength/2);
    beercules.endTurn();
}
beercules.burrito = function() {
    drHangover.message(`You devoir a burrito; the grease fills the empty void in your soul. You siphen 10 hit points from Dr. Hangover and gain 10 strength.`);
    drHangover.hit(10);
    beercules.chgHealth(10);
    beercules.chgStrength(10);
    beercules.endTurn();
}
beercules.drink = function() {
    drHangover.message(`You crack open a cold one with the boys; you feel invigorated. +50 Strength`);
    beercules.chgStrength(50);
    beercules.getTipsy(10);
    beercules.endTurn();
}
//MISC
beercules.message = function(text) {
    document.getElementById("msg-hero").textContent = text;
}
beercules.endTurn = function() {
    drHangover.attack();
    ok = false;
}
beercules.getTipsy = function(points) {
    beercules.drunkeness += points;
    if(beercules.drunkeness >= 100) gameover("Your body couldn't handle this much bro'ness. Try again tomorrow.");
}
beercules.chgStrength = function(points) {
    beercules.strength += points;
    document.getElementById("hero-strength-cur").textContent = beercules.strength;
}
beercules.chgHealth = function(points) {
    beercules.healthPoints += points;
    if(beercules.healthPoints > beercules.maxHealth) beercules.healthPoints = beercules.maxHealth;
    document.getElementById("hero-health-cur").textContent = beercules.healthPoints;
    if(beercules.healthPoints <= 0) gameOver("Bruh! You're dead.");
}
beercules.clrMsg = function() {
    if(document.getElementById("msg-ok")) document.getElementById("msg-ok").outerHTML = "";
    document.getElementById("msg-hero").textContent = "";
}
beercules.halved = function() {
    beercules.healthPoints /= 2;
    beercules.mana /= 2;
    beercules.strength /= 2;
    document.getElementById("hero-health-cur").textContent = beercules.healthPoints;
    document.getElementById("hero-health-tot").textContent = beercules.healthPoints;
    document.getElementById("hero-mana-cur").textContent = beercules.mana;
    document.getElementById("hero-mana-tot").textContent = beercules.mana;
    document.getElementById("hero-strength-cur").textContent = beercules.strength;
    ok = true;
    beercules.clrMsg();
}

let ok = false;
let dead = false;
window.onload = function() {
    document.getElementById("msg-ok").addEventListener("click", clickedOK);
}
function clickedOK() {
    document.getElementById("atk-sleep").addEventListener("click", beercules.sleep);
    document.getElementById("atk-burrito").addEventListener("click", beercules.burrito);
    document.getElementById("atk-drink").addEventListener("click", beercules.drink);
    beercules.halved();
    beercules.message("You wake up wondering where your clothes are. Dr. Hangover is staring at you from across the room. What happened last night? All stats are now halved.");
}
function gameOver(text) {
    //janky but it works
    setTimeout(function() {
        beercules.message("GAME OVER");
        document.getElementById("msg-hero").classList.add("gameOverText");
        drHangover.message(text);
        ok = false;
        dead = true;
    },100);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }  