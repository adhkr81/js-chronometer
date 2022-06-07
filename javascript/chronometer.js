class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // start(printTimeCallback) {
  //   this.intervalId = setInterval(() => {
  //     printTimeCallback;
  //     return (this.currentTime += 1);
  //   }, 1000);
  // }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let twoDigit = value.toString();

    if (twoDigit.length === 2) {
      return twoDigit;
    } else if (twoDigit.length === 1) {
      return '0' + twoDigit;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(
      seconds
    )}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
