import $ from 'jquery';
import Game from '../Game';
import PersonnelInterface from './PersonnelInterface';
import Rudolph from '../workers/Rudolph';
import InternElf from '../workers/InternElf';
import RegularElf from '../workers/RegularElf';
import Machine from '../workers/Machine';
import CyborgElf from '../workers/CyborgElf';
import Couple from '../workers/Couple';

class WorkerInterface {
  constructor(game) {
    this.elements = {
      playGround: '#play-ground',
      policyList: '#policy-list',
      sideBar: '#sidebar',
      manageList: '#manage-list',
      preview: '.preview',
      workerList: '#item-list'
    };

    this.workerList = {
      rudolph: Rudolph,
      internElf: InternElf,
      regularElf: RegularElf,
      machine: Machine,
      cyborgElf: CyborgElf,
      couple: Couple,
    };

    this.personnelInterface = new PersonnelInterface(Game);

    this.attachEvent(game);
  }

  getElements() {
    return this.elements;
  } // getElements

  getWorkerList() {
    return this.workerList;
  } // getWorkerList

  drawWorkerList(worker) {
    const workerName = this.workerList[worker.getName()];
    const nextWorker = worker.next();

    $(this.elements.preview).remove(); // 다음 미리보기 노동자를 지운다.

    // 새로 열리는 노동자를 출력한다.
    $(this.elements.workerList).append(
      `<li id="${worker.getName()}">` +
      `<img class="item-img" src="${worker.getImg()}"/>` +
      `<p>${worker.getKorName()}` +
      '<img class="item-present-img" src="/assets/present.png">' +
      `<span class="t">${workerName.getCost()}</span>` +
      `<br/><span class="pr">${workerName.getMinOutput()} ~ ${workerName.getMaxOutput()}개 생산</span>` +
      '</p>' +
      '</li>'
    );

    if (nextWorker) {
      const nextWorkerName = this.workerList[nextWorker.getName()];

      // 다음 미리보기 노동자를 출력한다.
      $(this.elements.workerList).append(
        '<li class="preview">' +
        `<img class="item-img preview-img" src="${nextWorker.getImg()}"/>` +
        '<p>???' +
        '<img class="item-present-img" src="/assets/present.png">' +
        `<span class="t">${nextWorkerName.getCost()}</span>` +
        '<br/><span class="pr">??? ~ ???개 생산</span>' +
        '</p>' +
        '</li>'
      );
    }
  } // drawWorkerList

  attachEvent(game) {
    // 노동자 고용
    $(this.elements.workerList).delegate('li', 'click', (e) => {
      const { id } = e.currentTarget;

      // 선물이 충분할 경우
      if (game.getTotalPresent() >= this.workerList[id].getCost()) {
        const worker = new this.workerList[id]();

        worker.initializeOutput(
          this.workerList[id].getMinOutput(),
          this.workerList[id].getMaxOutput()
        );
        worker.setLevelCost(this.workerList[id].getCost());

        worker.setName(worker.getName() + Game.getHiredWorkers().length);
        worker.setKorName(worker.getKorName() + Game.getHiredWorkers().length);

        game.addWorker(worker);
        game.addTotalOutput(worker.getOutput());
        game.updateTotalPresent(-1 * this.workerList[id].getCost());

        this.workerList[id].increaseCost();
        $(`#${id} .t`).text(this.workerList[id].getCost());

        this.personnelInterface.drawPersonnelList(worker);
        this.drawWorker(worker);
      }
    });
  } // attachHireEvent

  drawWorker(worker) {
    $('#play-ground').append(`<img src="${worker.getImg()}" />`);
  } // drawWorker
}

export default WorkerInterface;
