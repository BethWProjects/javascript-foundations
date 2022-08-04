class Centaur {
  constructor(centaurName){
    this.name = centaurName.name
    this.breed = centaurName.type
    this.cranky = false
    this.standing = true
    this.counter = 0
    this.layingDown = false
    this.amountSleep = 0
  }
  shootBow(){
    this.counter += 1
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true
      return `NO!`
    }
      return `Twang!!!`
    }


  run(){
    this.counter += 1
    if (this.counter >= 3 || this.layingDown === true || this.standing === false) {
      this.cranky = true
      return `NO!`
    }
    return `Clop clop clop clop!!!`
  }
  sleep(){
    this.amountSleep++
    if (this.standing){
      return `NO!`
    }else if (this.amountSleep >= 1) {
      this.cranky = false
      this.counter = 0
      return `ZZZZ`
  }
}
  layDown(){
    this.amountSleep++
    this.standing = false
    this.layingDown = true

  }
  standUp(){
    this.standing = true
    this.layingDown = false
    this.cranky = false
  }
  drinkPotion(){
    this.cranky = false
    if (this.standing === false) {
    return `Not while I\'m laying down!`
  }
  }
}

module.exports = Centaur;
