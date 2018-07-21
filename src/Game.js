import $ from 'jquery';

class Game {
  constructor() {
    this.hiredWorkers = [];
    this.totalPresent = 0;
    this.totalOutput = 0;
    this.clickPresent = 1;
  }

  getHiredWorkers() {
    return this.hiredWorkers;
  }

  getTotalPresent() {
    return this.totalPresent;
  }

  getTotalOutput() {
    return this.totalOutput;
  }

  getClickPresent() {
    return this.clickPresent;
  }

  addWorker(worker) {
    this.hiredWorkers.push(worker);
  }

  addTotalOutput(val) {
    this.totalOutput += val;
  }

  updateTotalPresent(val) {
    this.totalPresent += val;
    $('#present-num').text(this.totalPresent.toFixed(0));
  }
}

export default Game;
