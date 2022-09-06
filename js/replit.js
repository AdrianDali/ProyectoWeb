const stampit = require("stampit");

const Character = stampit({
  props: {
    name: null,
    health: 100,
  },
  init({ name = this.name }) {
    this.name = name;
  },
});

const Fighter = Character.compose({
  // inheriting
  props: {
    stamina: 100,
  },
  init({ stamina = this.stamina }) {
    this.stamina = stamina;
  },
  methods: {
    fight() {
      console.log(`${this.name} takes a mighty swing!`);
      this.stamina--;
      return this.stamina;
    },
  },
});

const Mage = Character.compose({
  // inheriting
  props: {
    mana: 100,
  },
  init({ mana = this.mana }) {
    this.mana = mana;
  },
  methods: {
    cast() {
      console.log(`${this.name} casts a fireball!`);
      this.mana--;
    },
  },
});


const Paladin = stampit(Mage, Fighter); // as simple as that!

module.exports = {
    Character,
    Fighter,
    Mage,
    Paladin
}

//const fighter = Fighter({ name: "Thumper" });
//fighter.fight();
//const mage = Mage({ name: "Zapper" });
//mage.cast();
//const paladin = Paladin({ name: "Roland", stamina: 50, mana: 50 });
//paladin.fight();
//paladin.cast();

//console.log(Paladin.compose.properties); // { name: null, health: 100, stamina: 100, mana: 100 }
//console.log(Paladin.compose.methods); // { fight: [Function: fight], cast: [Function: cast] }
