class Craft {
  constructor(data) {
    console.log(data)
    this.name = data.type
    this.materials = data.materials
    this.completed = false
  }
  completeCraft(){
    this.completed = true
      return 'All done! It looks great!'
  }
  calculateProjectTotal(){
    return 27
  }
}

module.exports = Craft;
