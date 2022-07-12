class Unicorn {
  constructor(name, color) {
    this.name = name;
  //  this.color = color;  removed this because it came before the default white return below and failed the test on line 34.
    console.log(color)
    if (color === undefined) {
      return this.color = 'white'
    } else {
      return this.color = color;
    }
  }
    isWhite() {
    if (this.color !== 'white') {
      return false
    }
  }
    says(statement) {
      return `**;* ${statement} *;**`
    }
  }



module.exports = Unicorn;
