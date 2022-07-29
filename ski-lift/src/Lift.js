var Skier = require('./Skier');

class Lift {
  constructor(amount){
    this.inService = true
    this.limit = amount
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(skierName, ticket) {
    var skier1 = new Skier(skierName, ticket)
    this.skiers.push(skier1)
  }
}

module.exports = Lift;
