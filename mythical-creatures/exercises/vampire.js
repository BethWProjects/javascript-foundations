class Vampire {
  constructor(vampireName, pet) {
    this.name = vampireName
    this.thirsty = true
    this.ouncesDrank = 0;
    if (pet === undefined) {
      return this.pet = 'bat'
    } else {
      return this.pet = pet
    }
  }
    drink() {
      this.thirsty = false;
      //drink 10 ounces at a time
      //this.ouncesDrank += 10;
      // is not thirsty if has drank
      if (this.ouncesDrank >= 50) {
        return `I\'m too full to drink anymore!`
      } else {
        return this.ouncesDrank += 10
      }
    }
  }




module.exports = Vampire;
























// constructor(name, pet, thirsty){
//   this.name = name;
//   this.thirsty = true;
//   this.ouncesDrank = 0;
//   this.pet = pet || "bat"
// }
//
//   drink() {
//     this.thirsty = false;
//     // when we hit 50 ounces (I think is equal 5 on the index, the vampire is full
//     if (this.ouncesDrank >= 50) {
//       return "I\'m too full to drink anymore!"
//     } else {
//       this.ouncesDrank += 10;
//     }
// }
