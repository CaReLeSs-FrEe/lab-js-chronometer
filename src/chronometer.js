class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    
    if(!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if(printTimeCallback) {
          printTimeCallback()
        }
      }, 1000)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
