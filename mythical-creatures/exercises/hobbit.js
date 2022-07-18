class Hobbit {
  constructor(hobbitName) {
    this.name = hobbitName.name
    this.age = 0
    this.adult = true
    this.old = false
    this.hasRing = true
  }
  celebrateBirthday(){
    this.age += 1
    if (this.age <= 32) {
      this.adult = false //assignment operator not saying strictly equal to
    } else {
        this.adult = true
    }if (this.age >= 101) {
      this.old = true
    }
  }
  getRing() {
    //
    if (this.name === 'Frodo') {
      this.hasRing = true
      return 'Here is the ring!'
    } else {
      this.hasRing = false
      return 'You can\'t have it!'
    }
  }
}



  // timeTravel(num, hobbitName){
  //   this.age++
  //   if (hobbitName.name <= num) {
  //     this.adult === false
  //   } else if
  //       (hobbitName.name >= num) {
  //         this.adult === true
  //       }
  //   }


//instantiate the new friend Bilbo and the new friend Mark
//new Hobbit (this.name)
//this.bilbo = new Hobbit;

module.exports = Hobbit;

//if I see an argument, I HAVE to write a parameter
