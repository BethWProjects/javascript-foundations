class LunchBox {
  constructor(obj){
    this.owner = obj.owner
    this.material = obj.madeOf
    this.shape = obj.shape
    this.color = obj.color
    this.snacks = []
  }
  acquireSnack(fruitSnack){
    this.snacks.push(fruitSnack)
    fruitSnack.isInLunchBox = true
  }
  findHealthySnacks(){
    var healthySnacks = []
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy())
      healthySnacks.push(this.snacks[i].type)
    }
    return healthySnacks
    //return ["Mixed fruit", "Fruit"]
  }
}

module.exports = LunchBox;
