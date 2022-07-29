class Centaur {
  constructor(centaurName){
    this.name = centaurName.name
    this.breed = centaurName.type
    this.cranky = false
    this.standing = true
    this.counter = 0
    this.layingDown = false
  }
  shootBow(){
    this.counter += 1
    if (this.counter >= 3 || this.cranky === true) {
      this.cranky = true
      return `NO!`
    }
      return `Twang!!!`

  }
  
  run(){
    this.counter += 1
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true
      return `NO!`
    }
    return `Clop clop clop clop!!!`
  }
  sleep(){
    if (this.layingDown === true) {
      this.cranky = false
      return `ZZZZ`
    }
    return `NO!`
  }
  layDown(){
    this.standing = false
    this.layingDown = true
  }
  standUp(){
    this.standing = true
    this.layingDown = false
  }
}

module.exports = Centaur;
