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
      personnelList: $('#personnel-list'),
      personnelItem: (
        name: string,
        img: string,
        korName: string,
        level: string,
        levelCost: number,
        output: number,
      ) => {
        return (
          `<li id="${name}">` +
          `<img class="worker-img" src="${img}"/>` +
          `<p>${korName}` +
          `<br/><span class="lv">${level}</span>` +
          '<img class="item-present-img" src="./assets/present.png">' +
          `<span class="t">${levelCost}</span>` +
          `<br/><span class="output">${output}개 생산</span>` +
          '</p>' +
          '</li>'
        );
      }
    };

    PersonnelInterface.instance = this;
  }

  drawPersonnelList(worker: Worker): void {
    const level = Worker.getLevelList();

    this.elements.personnelList.append(
      this.elements.personnelItem(
        worker.getName(),
        worker.getImg(),
        worker.getKorName(),
        level[worker.getLevel()],
        worker.getLevelCost(),
        worker.getOutput()
      )
    );
  } // drawPersonnelList

  attachEvent(): void {
    // 직원 승진
    this.elements.personnelList.delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const workers: Worker[] = Game.getHiredWorkers();

      workers.forEach((worker: Worker) => {
        if (worker.getName() === id) {
          if (Game.getTotalPresent() >= worker.getLevelCost()) {
            const workerClass: any = worker.constructor;
            const originalOutput: number = worker.getOutput();

            if ((worker.getLevel() < 3) && (worker.getOutput() < workerClass.getMaxOutput())) {
              const level = Worker.getLevelList();

              worker.increaseLevel();

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
