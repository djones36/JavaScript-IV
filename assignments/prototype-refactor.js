/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Constructor functions
//Parent
function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  GameObject.prototype.destroy = function (){
    return `${this.name} was removed from the game.`;
  };
  
  //Constructor functions
  //Child
  function CharacterStats(attributes){
    GameObject.call(this, attributes)
    this.healthPoints = attributes.healthPoints;
  };
  
  //Protoype
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  };
  
  
  // constructor functions
  //Grandhcild
  function Humanoid(attributes){
    CharacterStats.call(this, attributes)
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language =attributes.language;
  }
  
  //prototypes
  Humanoid.prototype = Object.create(CharacterStats.prototype)
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a geeting in ${this.language}. `;
  }
  
  //Objects
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  function VillainStats(attributes){
    Humanoid.call(this, attributes);
  };
  
  VillainStats.prototype = Object.create(Humanoid.prototype);
  
  function HeroStats(attributes){
    Humanoid.call(this, attributes)
  };
  
  HeroStats.prototype = Object.create(Humanoid.prototype);
  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    
    VillainStats.prototype.takingDamage = function(){
      let name = this.name;
      let health = this.healthPoints;
  
       return function(){
  
       health -= 4
  
       if (health > 0){
         return console.log(`${name} is taking damage, the current ${health} hp`)
       } else if (health <= 0){
         console.log(`${name} has died`);
       }
  
      };
  
    };
  
    HeroStats.prototype.feelingPain = function(){
      let name = this.name;
      let health = this.healthPoints;
  
      return function() {
  
       health -= 2;
       if (health > 0){
        return console.log(`${name} is taking damage, the current ${health} hp`)
       }else if (health <= 0){
         console.log(`${name} has fallen`);
       }
  
      };
  
    };
  
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    let hero = new HeroStats({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 3,
        height: 6,
      },
      healthPoints: 8,
      name: 'Hero',
      team: 'Hero Team',
      weapons: [
        'Sword',
        'Bow',
      ],
      language: 'Hero speak',
    });
  
    let villain = new VillainStats({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 8,
        height: 12,
      },
      healthPoints: 22,
      name: 'Villain',
      team: 'Evil Guy',
      weapons: [
        'Big Fire Fist',
        'Big Flame Sword',
      ],
      language: 'Evil speak',
    });
  let takeDamage = villain.takingDamage();
  let  feelPain = hero.feelingPain();
  takeDamage();
  feelPain();
  takeDamage();
  feelPain();
  takeDamage();
  feelPain();
  takeDamage();
  feelPain();
  
  
