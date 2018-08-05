import $ from 'jquery';
import CommonInterface from './interfaces/CommonInterface';
import WorkerInterface from './interfaces/WorkerInterface';
import PolicyInterface from './interfaces/PolicyInterface';
import Game from './Game';
import Rudolph from './workers/Rudolph';

$(document).ready(() => {
  const commonInterface = new CommonInterface();
  const workerInterface = new WorkerInterface(Game);
  const policyInterface = new PolicyInterface(Game);

  let currentWorkerLevel = new Rudolph();

  const attachEvent = () => {
    $('#present-img').click(() => {
      Game.updateTotalPresent(Game.getClickPresent());
    });
  }; // attachEvent

  attachEvent();

  setInterval(() => {
    const workers = workerInterface.getWorkerList();
    const workerName = currentWorkerLevel.getName();

    if (Game.getTotalPresent() >= workers[workerName].getCost()) {
      workerInterface.drawWorkerList(currentWorkerLevel);
      currentWorkerLevel = currentWorkerLevel.next();
    }

    Game.updateTotalPresent(Game.getTotalOutput());
    $('#present-info').text(`1초당 ${Game.getTotalOutput()}개 생산중!`);
  }, 1000);
});
