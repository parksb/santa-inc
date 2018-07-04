import $ from 'jquery';
import init from './init';
import ui from './ui';

const initial = new init();
const userInterface = new ui();

let workers = [];

$(document).ready(function() {
  setInterval(() => {
    let totalOutput = 0;
    let totalPresent = 0;

    for (let i = 0; i < workers.length; i++) {
      totalOutput += workers[i].getOutput();
    }

    totalPresent += totalOutput;

    $('#present-info').text(`1초당 ${totalOutput}개 생산중!`);
    $('#present-num').text(totalPresent.toFixed(0));
  }, 1000);
});