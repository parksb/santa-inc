import $ from 'jquery';

class Game {
  constructor() {
    this.workers = [];
    this.totalPresent = 0;
    this.totalOutput = 0;
    this.clickPresent = 1;
  }

  getWorkers() {
    return this.workers;
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
    this.workers.push(worker);
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
