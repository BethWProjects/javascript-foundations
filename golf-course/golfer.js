class Golfer {
  constructor(golfdetails){
    this.name = golfdetails.name
    this.handicap = golfdetails.handicap
    this.frustration = 0
    this.confidence = 0
  }
  calculateAvg(par){
    var score = par + this.handicap
    return `I usually shoot a ${score} on average.`
  }
  playRound(golfCourse){
    if (golfCourse.difficulty === 'hard') {
      this.frustration += 500
    } if (golfCourse.difficulty === 'moderate') {
      this.frustration += 100
    }
    }
    hitTheRange(){
      this.confidence += 10
    }
    marvel(golfCourse){
      return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
    }
  }


module.exports = Golfer;
