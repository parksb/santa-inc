import $ from 'jquery';

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
  }

  getElements() {
    return this.elements;
  } // getElements

  drawWorkerList(worker) {
    $(this.elements.preview).remove(); // 다음 미리보기 노동자를 지운다.

    // 새로 열리는 노동자를 출력한다.
    $(this.elements.workerList).append(
      `<li id="${worker.getName()}">` +
        `<img class="item-img" src="${worker.getImg()}"/>` +
        `<p>${worker.getKorName()}` +
          `<img class="item-present-img" src="/assets/present.png">` +
          `<span class="t">${worker.getCost()}</span>` +
          `<br/><span class="pr">${worker.getAddi()} ~ ${worker.getOutput()}개 생산</span>` +
        `</p>` +
      `</li>`
    );

    // 다음 미리보기 노동자를 출력한다.
    $(this.elements.workerList).append(
      `<li class="preview">` +
        `<img class="item-img preview-img" src="${worker.next().getImg()}"/>` +
        `<p>???` +
          `<img class="item-present-img" src="/assets/present.png">` +
          `<span class="t">${worker.next().getCost()}</span>` +
          `<br/><span class="pr">??? ~ ???개 생산</span>` +
        `</p>` +
      `</li>`
    );
  } // drawWorkerList

  drawPolicyList(policy) {
    $(this.elements.policyList).append(
      `<li>` +
        `<p>${policy.getKorName()}` +
          `<img class="item-present-img" src="/assets/present.png">` +
          `<span class="t">${policy.getCost()}</span>` +
          `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
          `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
        `</p>` +
      `</li>`
    );
  } // drawPolicyList
}

export default Interface;
