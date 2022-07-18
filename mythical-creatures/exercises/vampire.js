class Vampire {
  constructor(name, pet, thirsty){
    this.name = name;
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.pet = pet || "bat"
  }

    drink() {
      this.thirsty = false;
      // when we hit 50 ounces (I think is equal 5 on the index, the vampire is full
      if (this.ouncesDrank >= 50) {
        return "I\'m too full to drink anymore!"
      } else {
        this.ouncesDrank += 10;
      }
  }
  }




module.exports = Vampire;
