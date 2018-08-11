import $ from 'jquery';
import Game from '../Game';

class PolicyInterface {
  constructor(game) {
    this.elements = {
      personnelList: '#personnel-list'
    };

    this.attachEvent(game);
  }

  drawPersonnelList(worker) {
    $(this.elements.personnelList).append(
      `<li id="${worker.getName()}">` +
      `<img class="item-img" src="${worker.getImg()}"/>` +
      `<p>${worker.getKorName()}` +
      `<br/><span class="lv">Lv. ${worker.getLevel()}</span>` +
      '<img class="item-present-img" src="/assets/present.png">' +
      `<span class="t">${worker.getLevelCost()}</span>` +
      `<br/><span class="output">${worker.getOutput()}개 생산</span>` +
      '</p>' +
      '</li>'
    );
  } // drawPersonnelList

  attachEvent(game) {
    // 업그레이드
    $(this.elements.personnelList).delegate('li', 'click', (e) => {
      const { id } = e.currentTarget;
      const workers = Game.getHiredWorkers();

      workers.some((worker) => {
        if (worker.getName() === id) {
          if (game.getTotalPresent() >= worker.getLevelCost()) {
            const originalOutput = worker.getOutput();

            game.updateTotalPresent(-1 * worker.getLevelCost());
            worker.increaseLevel();
            game.addTotalOutput(worker.getOutput() - originalOutput);

            $(`#${id} .lv`).text(`Lv. ${worker.getLevel()}`);
            $(`#${id} .t`).text(worker.getLevelCost());
            $(`#${id} .output`).text(`${worker.getOutput()}개 생산`);
          }
        }

        return worker.getName() === id;
      });
    });
  } // attachHireEvent

  static updateOutput(name, output) {
    $(`#${name} .output`).text(`${output}개 생산`);
  }
}

export default PolicyInterface;
