class Hobbit {
  constructor(hobbitName) {
    this.name = hobbitName.name  //needed this dot notation to pass the nested name {name: 'Frodo'} in the object in.
    this.age = 0 // define the this.age property
    this.adult = true //define the this.adult property, the code below will change the value if instructions do so
    this.old = false //define the this.old property, the code below will change the value if instructions do so
    this.hasRing = true //define the this.hasRing property, the code below will change the value if instructions do so
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



module.exports = Hobbit;

//if I see an argument, I HAVE to write a parameter
