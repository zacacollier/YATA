export default {
  START: 'START',
  convertMin: (sec) => (sec - sec % 60) / 60,
  convertSec: (sec) => (sec % 60),
  displayMin: (sec) => this.convertMin(sec) > 0 ? this.convertMin(sec) : '',
  displaySec: (sec) => `${this.convertSec(sec)}`.length <= 1 ? `0${this.convertSec(sec)}` : this.convertSec(sec),
}

