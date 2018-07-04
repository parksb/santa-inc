import $ from "jquery";

class ui {
  constructor() {
    this.PLAY_GROUND = "#play-ground";
    this.SIDEBAR = "#sidebar";
    this.MANAGE_LIST = "#manage-list";
    this.PREVIEW = ".preview";
    this.WORKER_LIST = "#item-list";
    this.POLICY_LIST = "#policy-list";
  }

  drawItemList(worker) {
    $(this.PREVIEW).remove(); // 다음 아이템 미리보기를 지운다.

    // 새로 열리는 아이템을 출력한다.
    $(this.WORKER_LIST).append(
      `<li id="${worker.getName()}">` +
        `<img class="item-img" src="${worker.getImg()}"/>` +
        `<p>${worker.getKorName()}` +
          `<img class="item-present-img' src="img/present.png">` +
          `<span class="t">${worker.getCost()}</span>` +
          `<br/><span class="pr">${worker.getAddi()} ~ ${worker.getOutput()}개 생산</span>` +
        `</p>` +
      `</li>`
    );
    
    // 다음 아이템 미리보기를 출력한다. (아이템 그림 실루엣)
    $(this.WORKER_LIST).append(
      `<li class="preview">` +
        `<img class="item-img preview-img" src="${worker.next().getImg()}"/>` +
        `<p>???` +
          `<img class="item-present-img" src="img/present.png">` +
          `<span class="t">${worker.next().getCost()}</span>` +
          `<br/><span class="pr">??? ~ ???개 생산</span>` +
        `</p>` +
      `</li>`
    );
  }

  drawPolicyList(policy) {
    $(this.POLICY_LIST).append(
      `<li>` +
        `<p>policy.getKorName()` +
          `<img class="item-present-img" src="img/present.png">` +
          `<span class="t">${policy.getCost()}</span>` +
          `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
          `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
        `</p>` +
      `</li>`
    );
  }
}

export default ui;
