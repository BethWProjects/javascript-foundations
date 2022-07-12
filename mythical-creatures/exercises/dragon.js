class Dragon {
  constructor(name, rider) {
  //  console.log("first console.log: ", name, rider)
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }
    greet(rider) {
    //  console.log(rider)
      return `Hi, ${this.rider}!`;
    }

    eat(hungry) {
      if (this.hungry < 2) {
        return this.hungry = true
      } else {
        return this.hungry = false;
      }
    }
}


module.exports = Dragon;
