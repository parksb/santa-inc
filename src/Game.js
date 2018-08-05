import $ from 'jquery';

class Game {
  static totalPresent = 0;

  static totalOutput = 0;

  static clickPresent = 1;

  static hiredWorkers = [];

  static getHiredWorkers() {
    return this.hiredWorkers;
  }

  static getTotalPresent() {
    return this.totalPresent;
  }

  static getTotalOutput() {
    return this.totalOutput;
  }

  static getClickPresent() {
    return this.clickPresent;
  }

  static addWorker(worker) {
    this.hiredWorkers.push(worker);
  }

  static setClickPresent(val) {
    this.clickPresent = val;
  }

  static addTotalOutput(val) {
    this.totalOutput += val;
  }

  static updateTotalPresent(val) {
    this.totalPresent += val;
    $('#present-num').text(this.totalPresent.toFixed(0));
  }
}

export default Game;
