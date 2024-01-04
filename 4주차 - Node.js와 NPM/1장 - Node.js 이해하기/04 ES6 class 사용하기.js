class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    explain() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  // "duck", "quack"
  const duck = new Animal('duck', 'quack');
  
  
  module.exports = duck;
  