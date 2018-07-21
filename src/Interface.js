import $ from 'jquery';
import Rudolph from './workers/Rudolph';
import InternElf from './workers/InternElf';
import RegularElf from './workers/RegularElf';
import Machine from './workers/Machine';
import CyborgElf from './workers/CyborgElf';
import Couple from './workers/Couple';

class Interface {
  constructor() {
    this.elements = {
      playGround: '#play-ground',
      policyList: '#policy-list',
      sideBar: '#sidebar',
      manageList: '#manage-list',
      preview: '.preview',
      workerList: '#item-list'
    };

    this.workers = {
      rudolph: Rudolph,
      internElf: InternElf,
      regularElf: RegularElf,
      machine: Machine,
      cyborgElf: CyborgElf,
      couple: Couple,
    };

    Rudolph.cost = 1;
    InternElf.cost = 50;
    RegularElf.cost = 100;
    Machine.cost = 300;
    CyborgElf.cost = 1000;
    Couple.cost = 2000;
  }

  getElements() {
    return this.elements;
  } // getElements

  getWorkers() {
    return this.workers;
  }

  drawWorkerList(worker) {
    const workerName = this.workers[worker.getName()];
    const nextWorker = worker.next();
    const nextWorkerName = this.workers[nextWorker.getName()];

    $(this.elements.preview).remove(); // 다음 미리보기 노동자를 지운다.

    // 새로 열리는 노동자를 출력한다.
    $(this.elements.workerList).append(`<li id="${worker.getName()}">` +
        `<img class="item-img" src="${worker.getImg()}"/>` +
        `<p>${worker.getKorName()}` +
          '<img class="item-present-img" src="/assets/present.png">' +
          `<span class="t">${workerName.getCost()}</span>` +
          `<br/><span class="pr">${worker.getMinOutput()} ~ ${worker.getMaxOutput()}개 생산</span>` +
        '</p>' +
      '</li>');

    // 다음 미리보기 노동자를 출력한다.
    $(this.elements.workerList).append('<li class="preview">' +
        `<img class="item-img preview-img" src="${nextWorker.getImg()}"/>` +
        '<p>???' +
          '<img class="item-present-img" src="/assets/present.png">' +
          `<span class="t">${nextWorkerName.getCost()}</span>` +
          '<br/><span class="pr">??? ~ ???개 생산</span>' +
        '</p>' +
      '</li>');
  } // drawWorkerList

  drawPolicyList(policy) {
    $(this.elements.policyList).append('<li>' +
        `<p>${policy.getKorName()}` +
          '<img class="item-present-img" src="/assets/present.png">' +
          `<span class="t">${policy.getCost()}</span>` +
          `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
          `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
        '</p>' +
      '</li>');
  } // drawPolicyList

  attachEvent(game) {
    $(this.elements.workerList).delegate('li', 'click', (e) => {
      const { id } = e.currentTarget;
      const worker = new this.workers[id]();

      if (game.getTotalPresent() >= this.workers[id].getCost()) {
        game.addWorker(worker);
        game.addTotalOutput(worker.getOutput());
        game.updateTotalPresent(-1 * this.workers[id].getCost());

        this.workers[id].increaseCost();
        $(`#${id} .t`).text(this.workers[id].getCost());
      }
    });
  }
}

export default Interface;
