/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Parent

class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions
        }
        destroy(){
            return `${this.name} was removed from the game.`;
        }
}  
  
  
  //Child
  class CharacterStats extends GameObject{
      constructor(charAttributes){
          super(charAttributes);
          this.healthPoints = charAttributes.healthPoints;
      }
      takeDamage(){
        return `${this.name} took damage.`;
      }
  }

  //Grandhcild
  class Humanoid extends CharacterStats{
      constructor(humAttributes){
          super(humAttributes);
          this.team = humAttributes.team;
          this.weapons = humAttributes.weapons;
          this.language =humAttributes.language;
      }
      greet(){
        return `${this.name} offers a geeting in ${this.language}. `;
      }
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
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!

  class VillainStats extends Humanoid{
      constructor(vilAttributes){
          super(vilAttributes);
      }
      takingDamage(){
      let name = this.name;
      let health = this.healthPoints;
  
       return function(){
  
       health -= 4
  
       if (health > 0){
         return console.log(`${name} is taking damage, the current ${health} hp`);
       } else if (health <= 0){
         console.log(`${name} has died`);
       }
  
      };
  
      };
  }  
  
  class HeroStats extends Humanoid{
      constructor(heroAttributes){
          super(heroAttributes);
      }
      feelingPain(){
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
      }
  }
  
//hero and villain objects

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
  
  
