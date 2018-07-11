import $ from 'jquery';
import Interface from './Interface';
import Rudolph from './workers/Rudolph';

const userInterface = new Interface();

const workers = [];
const clickPresent = 1;

let totalOutput = 0;
let totalPresent = 0;
let currentWorkerLevel = new Rudolph();

function updatePresent(n) {
  totalPresent += n;
  $('#present-num').text(totalPresent.toFixed(0));
} // updatePresent

function attachEvent() {
  $(userInterface.getElements().workerList).delegate('li', 'click', (e) => {
    const { id } = e.currentTarget;

    for (let worker = new Rudolph(); worker !== currentWorkerLevel; worker = worker.next()) {
      if (worker.getName() === id && totalPresent >= worker.getCost()) {
        workers.push(worker);
        totalOutput += worker.getOutput();

        worker.setCost(10);
        console.log(worker.getCost());
        $(`#${id} .t`).text(worker.getCost());

        updatePresent(-1 * worker.getCost());
        break;
      }
    }
  });

  $('#present-img').click(() => {
    updatePresent(clickPresent);
  });
} // attachEvent

$(document).ready(() => {
  attachEvent();

  setInterval(() => {
    if (totalPresent >= currentWorkerLevel.getCost()) {
      userInterface.drawWorkerList(currentWorkerLevel);
      currentWorkerLevel = currentWorkerLevel.next();
    }

    updatePresent(totalOutput);
    $('#present-info').text(`1초당 ${totalOutput}개 생산중!`);
  }, 1000);
});
