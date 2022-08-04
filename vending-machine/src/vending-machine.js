class VendingMachine {
  constructor(data){
    this.id = data.id
    this.isBroken = data.isBroken
    this.snacks = []
  }
  addSnacks(candyBar){
      //console.log(candyBar)
    for (var i = 0; i < this.snacks.length; i++) {
    if (this.snacks[i].name === candyBar.name) {
      return `Sorry, that snack is already stocked! Try adding a different snack.`
    }
    }
    this.snacks.push(candyBar)
  }
  purchaseSnack(snackName, price){
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].price > price) {
        return `Sorry, not enough payment. Please add more money.`
    }
      if (this.snacks[i].itemsInStock === 0){
      return `Sorry, no items in stock. Try another item.`
    }
      if (this.snacks[i].name === snackName) {
        this.snacks[i].removeItem()
      var change = price - this.snacks[i].price
      return `Success! Here is $${change} back!`
      }
    }
  }
}


module.exports = VendingMachine;
