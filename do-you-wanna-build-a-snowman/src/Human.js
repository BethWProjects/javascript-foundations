var Snowman = require('./Snowman');

class Human {
  constructor(humanName){
    this.name = humanName
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(details, num){
    this.materials[details] += num
  }
  buildASnowman(){
    var snowman = new Snowman(this.materials);
    return snowman
  }
  placeMagicHat(){
    var snowman = this.buildASnowman()
    if (snowman.canWearMagicHat() === false){
    return `I guess I didn't build it correctly.`
  } else if (snowman.canWearMagicHat() === true) {
    return `Woah, this snowman is coming to life!`
  }
  }
}

module.exports = Human;
