import * as $ from 'jquery';
import Worker from './workers/Worker';

abstract class Game {
  private static totalPresent: number = 0;
  private static totalOutput: number = 0;
  private static clickPresent: number = 1;
  private static hiredWorkers: Worker[] = [];

  static getHiredWorkers(): Worker[] {
    return this.hiredWorkers;
  }

  static getTotalPresent(): number {
    return this.totalPresent;
  }

  static getTotalOutput(): number {
    return this.totalOutput;
  }

  static getClickPresent(): number {
    return this.clickPresent;
  }

  static addWorker(worker: Worker): void {
    this.hiredWorkers.push(worker);
  }

  static setClickPresent(val: number): void {
    this.clickPresent = val;
  }

  static addTotalOutput(val: number): void {
    this.totalOutput += val;
  }

  static updateTotalPresent(val: number): void {
    this.totalPresent += val;
    $('#present-num').text(this.totalPresent.toFixed(0));
  }
}

export default Game;
