import * as $ from 'jquery';
import CommonInterface from './interfaces/CommonInterface';
import WorkerInterface from './interfaces/WorkerInterface';
import PolicyInterface from './interfaces/PolicyInterface';
import Game from './Game';
import Rudolph from './workers/Rudolph';
import RibbonPractice from './policies/RibbonPractice';

$(document).ready(() => {
  const commonInterface: CommonInterface = new CommonInterface();
  const workerInterface: WorkerInterface = new WorkerInterface();
  const policyInterface: PolicyInterface = new PolicyInterface();

  let currentWorkerLevel: any = new Rudolph();

  const attachEvent = () => {
    $('#present-img').click(() => {
      Game.updateTotalPresent(Game.getClickPresent());
    });
  }; // attachEvent

  attachEvent();
  policyInterface.drawPolicyList(new RibbonPractice());

  setInterval(() => {
    if (currentWorkerLevel) {
      const workerClass: any = currentWorkerLevel.constructor;

      if (Game.getTotalPresent() >= workerClass.getCost()) {
        workerInterface.drawWorkerList(currentWorkerLevel);
        currentWorkerLevel = currentWorkerLevel.next();
      }
    }

    Game.updateTotalPresent(Game.getTotalOutput());
    $('#present-info').text(`1초당 ${Game.getTotalOutput()}개 생산중!`);
  }, 1000);
});
