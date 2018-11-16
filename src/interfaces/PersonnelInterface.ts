import * as $ from 'jquery';
import Game from '../Game';
import Worker from '../workers/Worker';

class PersonnelInterface {
  private static instance: PersonnelInterface;

  private elements: any;

  constructor() {
    if (PersonnelInterface.instance) {
      return PersonnelInterface.instance;
    }

    this.elements = {
      personnelList: '#personnel-list'
    };

    PersonnelInterface.instance = this;
  }

  drawPersonnelList(worker: Worker): void {
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

  attachEvent(): void {
    // 업그레이드
    $(this.elements.personnelList).delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const workers: Worker[] = Game.getHiredWorkers();

      workers.forEach((worker: Worker) => {
        if (worker.getName() === id) {
          if (Game.getTotalPresent() >= worker.getLevelCost()) {
            const originalOutput = worker.getOutput();

            Game.updateTotalPresent(-1 * worker.getLevelCost());
            worker.increaseLevel();
            Game.addTotalOutput(worker.getOutput() - originalOutput);

            $(`#${id} .lv`).text(`Lv. ${worker.getLevel()}`);
            $(`#${id} .t`).text(worker.getLevelCost());
            $(`#${id} .output`).text(`${worker.getOutput()}개 생산`);
          }
        }
      });
    });
  } // attachHireEvent

  updateOutput(name: string, output: number): void {
    $(`#${name} .output`).text(`${output}개 생산`);
  } // updateOutput
}

export default PersonnelInterface;
