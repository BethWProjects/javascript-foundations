class Dragon {
  constructor(dragonName, person) {
  //  console.log("first console.log: ", name, rider)
  //this.name refers to the Object Instance.
  //if I instantiate a new Dragon and pass in a name "Louisa" the new name will be Louisa.
  //if I see an argument, I HAVE to write a parameter
    this.name = dragonName;
    this.rider = person;
    this.hungry = true;
    this.meals = 0;
  }
  // a method called greet with no parameters.
  // when the function is run, it evaluates to a string,
  // "Hi [name of dragon's rider]"
  // return!  Return that string.  If you don't return the string
  //the function will be undefined. 
    greet(rider) {
    //  console.log(rider)
      return `Hi, ${this.person}!`;
    }

    eat() {
      this.meals++
      if (this.meals < 3) {
        return this.hungry = true
      } else {
        return this.hungry = false;
      }
    }
}


module.exports = Dragon;
