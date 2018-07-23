import $ from 'jquery';
import CommonInterface from './interfaces/CommonInterface';
import WorkerInterface from './interfaces/WorkerInterface';
import PolicyInterface from './interfaces/PolicyInterface';
import Game from './Game';
import Rudolph from './workers/Rudolph';

$(document).ready(() => {
  const game = new Game();
  const commonInterface = new CommonInterface();
  const workerInterface = new WorkerInterface(game);
  const policyInterface = new PolicyInterface();

  let currentWorkerLevel = new Rudolph();

  const attachEvent = () => {
    $('#present-img').click(() => {
      game.updateTotalPresent(game.getClickPresent());
    });
  }; // attachEvent

  attachEvent();

  setInterval(() => {
    const workers = workerInterface.getWorkerList();
    const workerName = currentWorkerLevel.getName();

    if (game.getTotalPresent() >= workers[workerName].getCost()) {
      workerInterface.drawWorkerList(currentWorkerLevel);
      currentWorkerLevel = currentWorkerLevel.next();
    }

    game.updateTotalPresent(game.getTotalOutput());
    $('#present-info').text(`1초당 ${game.getTotalOutput()}개 생산중!`);
  }, 1000);
});
