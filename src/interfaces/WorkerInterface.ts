import * as $ from 'jquery';
import Game from '../Game';
import PersonnelInterface from './PersonnelInterface';
import Worker from '../workers/Worker';
import WorkerTable from '../data/WorkerTable';

class WorkerInterface {
  private static instance: WorkerInterface;

  private elements: any;
  private workerTable: any;
  private personnelInterface: PersonnelInterface;

  constructor() {
    if (WorkerInterface.instance) {
      return WorkerInterface.instance;
    }

    this.elements = {
      playGround: $('#play-ground'),
      workerList: $('#worker-list'),

      workerItem: (
        name: string,
        img: string,
        korName: string,
        cost: number,
        minOutput: number,
        maxOutput: number
      ) => {
        return (
          `<li id="${name}">` +
          `<img class="worker-img" src="${img}"/>` +
          `<p>${korName}` +
          '<img class="item-present-img" src="./assets/present.png">' +
          `<span class="t">${cost}</span>` +
          `<br/><span class="pr">${minOutput} ~ ${maxOutput}개 생산</span>` +
          '</p>' +
          '</li>'
        );
      },

      workerPreviewItem: (
        img: string,
        cost: number
      ) => {
        return (
          '<li id="preview">' +
          `<img class="worker-img preview-img" src="${img}"/>` +
          '<p>???' +
          '<img class="item-present-img" src="./assets/present.png">' +
          `<span class="t">${cost}</span>` +
          '<br/><span class="pr">??? ~ ???개 생산</span>' +
          '</p>' +
          '</li>'
        );
      },
    };

    this.workerTable = WorkerTable;

    this.personnelInterface = new PersonnelInterface();

    WorkerInterface.instance = this;
  }

  getElements(): any {
    return this.elements;
  } // getElements

  drawWorkerList(worker: Worker): void {
    const workerClass: any = worker.constructor;
    const nextWorker: Worker = worker.next();

    $('#preview').remove(); // 다음 미리보기 노동자를 지운다.

    // 새로 열리는 노동자를 출력한다.
    this.elements.workerList.append(
      this.elements.workerItem(
        worker.getName(),
        worker.getImg(),
        worker.getKorName(),
        workerClass.getCost(),
        workerClass.getMinOutput(),
        workerClass.getMaxOutput()
      )
    );

    if (nextWorker) {
      const nextWorkerClass: any = nextWorker.constructor;

      // 다음 미리보기 노동자를 출력한다.
      this.elements.workerList.append(
        this.elements.workerPreviewItem(
          nextWorker.getImg(),
          nextWorkerClass.getCost()
        )
      );
    }
  } // drawWorkerList

  attachEvent(): void {
    // 노동자 고용
    this.elements.workerList.delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const workerClass: any = this.workerTable[id];

      // 선물이 충분할 경우
      if (workerClass) {
        if (Game.getTotalPresent() >= workerClass.getCost()) {
          const worker: Worker = new workerClass;

          worker.initializeOutput(
            workerClass.getMinOutput(),
            workerClass.getMaxOutput()
          );
          worker.setLevelCost(workerClass.getCost());

          worker.setName(worker.getName() + Game.getHiredWorkers().length);
          worker.setKorName(worker.getKorName() + Game.getHiredWorkers().length);

          Game.addWorker(worker);
          Game.addTotalOutput(worker.getOutput());
          Game.updateTotalPresent(-1 * workerClass.getCost());

          workerClass.increaseCost();
          $(`#${id} .t`).text(workerClass.getCost());

          this.personnelInterface.drawPersonnelList(worker);
          this.drawWorker(worker);
        }
      }
    });
  } // attachHireEvent

  drawWorker(worker: Worker): void {
    this.elements.playGround.append(`<img src="${worker.getImg()}" />`);
  } // drawWorker

  updateOutputRange(id: string): void {
    const worker: any = this.workerTable[id];
    $(`#${id} .pr`).text(`${worker.getMinOutput()} ~ ${worker.getMaxOutput()}개 생산`);
  } // updateOutputRange
}

export default WorkerInterface;
