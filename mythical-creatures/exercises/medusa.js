var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(personName) {
    this.name = personName
    this.statues = []
  }

  gazeAtVictim(victim){
    if (this.statues.length < 3) {
    this.statues.push(new Statue(victim.name))
  } else {
    this.statues.push(new Statue(victim.name))
    var freedStatue = this.statues.shift(new Statue(victim.name))
    var freedPerson = new Person(freedStatue.name)
    var mood = new Person(freedPerson.mood = 'relieved')
    //shift removes the first element, we know Pam was
    //released.
  }
    return freedPerson
  }
}

module.exports = Medusa;
