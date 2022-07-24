class Magician{
  constructor(magicianDetails){
    //we are instantiating a name within an object
    //console.log(magicianName.name)
    this.name = `The Great ${magicianDetails.name}`
    //we are instantiating the magicians stage name, using interpolation and the
    //argument for the magicians name
    this.assistant = magicianDetails.assistant
    this.favoriteAccessory = magicianDetails.clothing || 'top hat'
    this.confidencePercentage = 10

  }
    performIncantation(incantation) {
      return `${incantation.toUpperCase()}!`
    }

    performTrick() {
      this.confidencePercentage += 10
      if (this.favoriteAccessory === 'top hat') {
        return 'PULL RABBIT FROM TOP HAT'
      } else {
        return 'PULL DOVE FROM SLEEVE'
      }
    }

    performShowStopper() {
      if (this.confidencePercentage === 110 && this.assistant) {
        return 'WOW! The magician totally just sawed that person in half!'
      } else {
        return 'Oh no, this trick is not ready!'
      }
    }
}


module.exports = Magician;
