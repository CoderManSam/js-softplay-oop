// TODO: Write your class in this file

class PlayCenter {
  constructor (adults = 0, children = 0, maxOccupancy = 30, childrenPerAdult = 3) {
    this.adults = adults 
    this.children = children 
    this.maxOccupancy = maxOccupancy
    this.childrenPerAdult = childrenPerAdult
  }


  occupancy() {
    return {adults: this.adults, children: this.children}
  }


  enter(numAdults, numChildren) {

    if (((this.children + numChildren)/(this.adults + numAdults)) > this.childrenPerAdult) {

      return false
    }

    if (this.adults + numAdults + this.children + numChildren > this.maxOccupancy) {

      return false
    }

    if (numAdults >= numChildren) {

      this.adults += numAdults

      this.children += numChildren

      return true
    }


    return false
  }


  leave(numAdults, numChildren) {

    if (((this.children - numChildren)/(this.adults - numAdults)) > this.childrenPerAdult) {

      return false
    }

    if (numChildren <= numAdults &&
       (this.adults - numAdults) >= (this.children - numChildren) &&
       numAdults <= this.adults &&
       numChildren <= this.children) {

        this.adults -= numAdults

        this.children -= numChildren

        return true
      }
    
      return false
  }



}

const softPlay = new PlayCenter (0, 0, 30, 3)


console.log(softPlay.occupancy())
console.log(softPlay.enter(2, 1))
console.log(softPlay.occupancy())
console.log(softPlay.leave(2, 1))
console.log(softPlay.occupancy())



// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: PlayCenter
}
