import * as $ from 'jquery';
import Game from '../Game';
import Policy from '../policies/Policy';
import PolicyTable from '../data/PolicyTable';

class PolicyInterface {
  private static instance: PolicyInterface;

  private elements: any;
  private policyTable: any;

  constructor() {
    if (PolicyInterface.instance) {
      return PolicyInterface.instance;
    }

    this.elements = {
      policyList: '#policy-list'
    };

    this.policyTable = PolicyTable;

    PolicyInterface.instance = this;
  }

  drawPolicyList(policy: Policy): void {
    const policyClass: any = policy.constructor;

    $(this.elements.policyList).append(
      `<li id="${policy.getName()}">` +
      `<p>${policy.getKorName()}` +
      '<img class="item-present-img" src="./assets/present.png">' +
      `<span class="t">${policyClass.getCost()}</span>` +
      `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
      `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
      '</p>' +
      '</li>'
    );
  } // drawPolicyList

  attachEvent(): void {
    // 정책 채택
    $(this.elements.policyList).delegate('li', 'click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.currentTarget;
      const policy: Policy = new this.policyTable[id]();
      const policyClass: any = this.policyTable[id];

      // 선물이 충분할 경우
      if (Game.getTotalPresent() >= policyClass.getCost()) {
        const nextPolicies: Policy[] = policy.next();

        Game.updateTotalPresent(-1 * policyClass.getCost());
        $(`#${id}`).remove();
        policy.execute();

        if (nextPolicies) {
          nextPolicies.forEach((policy: Policy) => {
            this.drawPolicyList(policy);
          });
        }
      }
    });
  } // attachHireEvent
}

export default PolicyInterface;
