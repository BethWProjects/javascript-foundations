class Runner {
  constructor(runnerName, runnerAge) {
    this.name = runnerName
    this.age = runnerAge
    this.milesRun = 0
    this.fitness = 25
  }
  runSomeMiles(miles) {
    this.milesRun = this.milesRun + miles;
    // if (this.milesRun++) {
    //   this.fitness++
    // }
}
}
module.exports = Runner;
