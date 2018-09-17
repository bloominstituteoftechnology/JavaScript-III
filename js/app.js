// * Fighter Objects
const michael = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  maxHP: 15,
  name: 'Michael Scott',
  faction: 'Dunder Mifflin',
  weapons: ['Improv Comedy', 'Party Planning Committee'],
  language: 'Common Toungue'
});

const charles = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  maxHP: 10,
  name: 'Charles Minor',
  faction: 'Corporate',
  weapons: ['Bureaucracy', 'Dagger'],
  language: 'Elvish'
});

// INIT SET UP

heroTotalHP.textContent = michael.maxHP;
heroHP.textContent = michael.maxHP;
villainTotalHP.textContent = charles.maxHP;
villainHP.textContent = charles.maxHP;

// BUTTON EVENT LISTENERS

villain.addEventListener('click', e => {
  if (e.target.classList.contains('attack-btn')) {
    console.log('hello');
    charles.baseAttack(michael);
  } else if (e.target.classList.contains('super-btn')) {
    charles.superAttack(michael);
  }
  heroHP.textContent = michael.hp;
});

hero.addEventListener('click', e => {
  if (e.target.classList.contains('attack-btn')) {
    michael.castSpell(charles);
  } else if (e.target.classList.contains('super-btn')) {
    michael.superAttack(charles);
  }
  villainHP.textContent = charles.hp;
});

// FUNCTIONS
function messageFlicker() {
  messages.style.background = '#ff7878';
  messages.style.color = '#fff';
  setTimeout(() => {
    messages.style.background = '#eee';
    messages.style.color = '#000';
  }, 350);
}
