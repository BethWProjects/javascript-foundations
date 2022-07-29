class Werewolf {
  constructor(wolfName) {
    this.name = wolfName
    this.form = 'human'
    this.hungry = false
  }
  completeTransformation(){
    if (this.form === 'human') {
      this.form = 'wolf'
      this.hungry = true
      return 'Aaa-Woooo!'
      //the tests are reversed
    } if (this.form === 'wolf') {
      this.form = 'human'
      this.hungry = false
      return 'Where are I?'
    }
  }
  eatVictim(victimObject){
    victimObject.alive = false
    if (this.form === 'wolf') {
      this.form = 'human'
      return `Yum, ${victimObject.name} was delicious.`
    } else if (this.form === 'human') {
      return 'No way am I eating Baby, I\'d like a burger!'
  }
  }
}


module.exports = Werewolf;
