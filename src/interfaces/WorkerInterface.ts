import * as $ from 'jquery';
import Game from '../Game';
import Worker from '../workers/Worker';
import PersonnelInterface from './PersonnelInterface';
import Rudolph from '../workers/Rudolph';
import ParttimeElf from '../workers/ParttimeElf';
import InternElf from '../workers/InternElf';
import RegularElf from '../workers/RegularElf';
import Machine from '../workers/Machine';
import CyborgElf from '../workers/CyborgElf';
import Tree from '../workers/Tree';

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
      playGround: '#play-ground',
      policyList: '#policy-list',
      sideBar: '#sidebar',
      manageList: '#manage-list',
      preview: '.preview',
      workerList: '#item-list'
    };

    this.workerTable = {
      rudolph: Rudolph,
      parttimeElf: ParttimeElf,
      internElf: InternElf,
      regularElf: RegularElf,
      machine: Machine,
      cyborgElf: CyborgElf,
      tree: Tree,
    };

    this.personnelInterface = new PersonnelInterface();

    WorkerInterface.instance = this;
  }

  getElements(): any {
    return this.elements;
  } // getElements

  drawWorkerList(worker: Worker): void {
    const workerClass: any = worker.constructor;
    const nextWorker: Worker = worker.next();

    $(this.elements.preview).remove(); // 다음 미리보기 노동자를 지운다.

    // 새로 열리는 노동자를 출력한다.
    $(this.elements.workerList).append(
      `<li id="${worker.getName()}">` +
      `<img class="item-img" src="${worker.getImg()}"/>` +
      `<p>${worker.getKorName()}` +
      '<img class="item-present-img" src="/assets/present.png">' +
      `<span class="t">${workerClass.getCost()}</span>` +
      `<br/><span class="pr">${workerClass.getMinOutput()} ~ ${workerClass.getMaxOutput()}개 생산</span>` +
      '</p>' +
      '</li>'
    );

    if (nextWorker) {
      const nextWorkerClass: any = nextWorker.constructor;

      // 다음 미리보기 노동자를 출력한다.
      $(this.elements.workerList).append(
        '<li class="preview">' +
        `<img class="item-img preview-img" src="${nextWorker.getImg()}"/>` +
        '<p>???' +
        '<img class="item-present-img" src="/assets/present.png">' +
        `<span class="t">${nextWorkerClass.getCost()}</span>` +
        '<br/><span class="pr">??? ~ ???개 생산</span>' +
        '</p>' +
        '</li>'
      );
    }
  } // drawWorkerList

  attachEvent(): void {
    // 노동자 고용
    $(this.elements.workerList).delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const workerClass: any = this.workerTable[id];

      // 선물이 충분할 경우
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
    });
  } // attachHireEvent

  drawWorker(worker: Worker): void {
    $('#play-ground').append(`<img src="${worker.getImg()}" />`);
  } // drawWorker

  updateOutputRange(id: string): void {
    const worker: any = this.workerTable[id];
    $(`#${id} .pr`).text(`${worker.getMinOutput()} ~ ${worker.getMaxOutput()}개 생산`);
  } // updateOutputRange
}

export default WorkerInterface;
