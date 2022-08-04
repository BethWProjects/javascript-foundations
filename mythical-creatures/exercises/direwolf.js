class Direwolf {
  constructor(name, home, size){
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark){
    if (this.starksToProtect.length >1)
    return
    if (this.home === stark.location) {
    this.starksToProtect.push(stark)
    stark.safe = true //row 148
    this.huntsWhiteWalkers = false
  } else {
    this.starksToProtect = []
    this.huntsWhiteWalkers
  }
  }
  leave(stark){
    this.starksToProtect.pop(stark)
    stark.safe = false
  //  console.log(this.starksToProtect);
    }
  
  }



module.exports = Direwolf;
