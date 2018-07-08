import $ from 'jquery';
import Interface from './Interface';
import Rudolph from './workers/Rudolph';

const userInterface = new Interface();

let workers = [];
let clickPresent = 1;

let totalOutput = 0;
let totalPresent = 0;
let currentWorkerLevel = new Rudolph();

function updatePresent(n) {
  totalPresent += n;
  $('#present-num').text(totalPresent.toFixed(0));
}

$(document).ready(() => {
  $(userInterface.getElements().workerList).delegate('li', 'click', (e) => {
    const costRatio = 3;

    console.log(e.currentTarget);
  });

  $("#present-img").click(function() {
    updatePresent(clickPresent);
  });

  setInterval(() => {
    if (totalPresent >= currentWorkerLevel.getCost()) {
      userInterface.drawWorkerList(currentWorkerLevel);
      currentWorkerLevel = currentWorkerLevel.next();
    }
    
    for (let i = 0; i < workers.length; i++) {
      totalOutput += workers[i].getOutput();
    }

    updatePresent(totalOutput);
    $('#present-info').text(`1초당 ${totalOutput}개 생산중!`);
  }, 1000);
});
