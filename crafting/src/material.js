class Material {
  constructor(name, price, amount, units){
    this.name = name,
    this.price = price,
    this.amount = amount,
    this.units = units
  }
  useMaterial(num){

    if (this.amount < num) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      (this.amount -= num)
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
  }
  calculateMaterialCost(){
    var totalCost = this.price * this.amount
    return totalCost
  }
}


module.exports = Material;


















// constructor(name, price, amount, units) {
//   this.name = name
//   this.price = price
//   this.amount = amount
//   this.units = units
// }
// useMaterial(amount) {
//   //i want to subtract fabric amount 2 from 3
//   if (amount > this.amount) {
//       return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
//     } else {
//       this.amount -= amount
//           return `You now have ${this.amount} ${this.units} of ${this.name} left.`
//     }
//     //if amount == 12 return first sentence
//     //else return the second sentence because we are
//   }
//   calculateMaterialCost() {
//     var totalCost = this.price * this.amount
//       return totalCost
//   }
