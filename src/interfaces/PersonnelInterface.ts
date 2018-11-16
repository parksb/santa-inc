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
    const level = Worker.getLevelList();

    $(this.elements.personnelList).append(
      `<li id="${worker.getName()}">` +
      `<img class="item-img" src="${worker.getImg()}"/>` +
      `<p>${worker.getKorName()}` +
      `<br/><span class="lv">${level[worker.getLevel()]}</span>` +
      `<br/><span class="output">${worker.getOutput()}개 생산</span>` +
      '</p>' +
      '</li>'
    );
  } // drawPersonnelList

  attachEvent(): void {
    $(this.elements.personnelList).delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const workers: Worker[] = Game.getHiredWorkers();

      workers.forEach((worker: Worker) => {
        if (worker.getName() === id) {
          if (Game.getTotalPresent() >= worker.getLevelCost()) {
            const originalOutput = worker.getOutput();

            if (worker.increaseLevel()) {
              const level = Worker.getLevelList();

              Game.updateTotalPresent(-1 * worker.getLevelCost());
              Game.addTotalOutput(worker.getOutput() - originalOutput);

              $(`#${id} .lv`).text(level[worker.getLevel()]);
              $(`#${id} .output`).text(`${worker.getOutput()}개 생산`);
            }
          }
        }
      });
    });
  } // attachEvent

  updateOutput(name: string, output: number): void {
    $(`#${name} .output`).text(`${output}개 생산`);
  } // updateOutput
}

export default PersonnelInterface;
