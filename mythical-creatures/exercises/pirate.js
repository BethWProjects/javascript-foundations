class Pirate {
  constructor(pirateName, pirateJob){
    this.name = pirateName;
    this.cursed = false;
    this.booty = 0;
    if (pirateJob === undefined) {
      this.job = 'scallywag'
    } else {
      this.job = pirateJob
    }
  }
    robShip(){
      if (this.booty >= 500){
        this.cursed = true;
        return `ARG! I\'ve been cursed!`
      } else {
      this.booty += 100;;
      return `YAARRR!`
    }
  }
    liftCurse() {
      //pirate pays 300 to lift curse
      //pirate is cursed if booty equals 500
      if (this.booty < 500) {
        this.cursed = false
        return `You don\'t need to lift a curse!`
      } else if (this.booty = 200) {
        this.cursed = false
        return `Your curse has been lifted!`
  }
}
}

module.exports = Pirate;



























// constructor(pirateName, pirateJob) {
//   this.name = pirateName
//   this.job = pirateJob
//   this.cursed = false
//   this.booty = 0
//   if (pirateJob === undefined) {
//     return this.job = 'scallywag'
//   } else {
//     return this.job = pirateJob
//   }
// }
//
//
// robShip() {
// //     this.booty += 100  //this.booty increments by 100 when robbing a ship but tie it into the if statement because it needs to stop incrementing.
//     if (this.booty >= 500) {
//       this.cursed = true
//       return 'ARG! I\'ve been cursed!'
//     } else {
//       this.booty += 100
//       return 'YAARRR!'
//   }
// }
//
// liftCurse() {
//   //if the pirate pays 300 booty he is not cursed and the curse is lifted
//   //if the pirate is cursed, remove 300 booty.
//     if (this.cursed === true) {
//       this.booty -= 300
//       this.cursed = false
//       return 'Your curse has been lifted!'
//   //if the pirate is not cursed, do not remove 300 booty
//     } else {
//       //this.cursed += 100
//       return 'You don\'t need to lift a curse!'
//     }
// }
