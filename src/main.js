import $ from 'jquery';
import Interface from './Interface';
import Rudolph from './workers/Rudolph';
import InternElf from './workers/InternElf';
import RegularElf from './workers/RegularElf';
import Machine from './workers/Machine';
import CyborgElf from './workers/CyborgElf';
import Couple from './workers/Couple';

const userInterface = new Interface();

const workers = [];
const clickPresent = 1;

let totalOutput = 0;
let totalPresent = 0;
let currentWorkerLevel = new Rudolph();

const workerList = {
  rudolph: Rudolph,
  internElf: InternElf,
  regularElf: RegularElf,
  machine: Machine,
  cyborg: CyborgElf,
  couple: Couple,
};

function updatePresent(n) {
  totalPresent += n;
  $('#present-num').text(totalPresent.toFixed(0));
} // updatePresent

function attachEvent() {
  $(userInterface.getElements().workerList).delegate('li', 'click', (e) => {
    const { id } = e.currentTarget;
    const worker = new workerList[id]();

    if (totalPresent >= worker.getCost()) {
      workers.push(worker);
      totalOutput += worker.getOutput();

      $(`#${id} .t`).text(worker.getCost());

      updatePresent(-1 * worker.getCost());
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
