import $ from 'jquery';
import RibbonPractice from '../policies/RibbonPractice';
import SmartWork from '../policies/SmartWork';
import NightOver from '../policies/NightOver';
import PassionPay from '../policies/PassionPay';
import Multitasking from '../policies/Multitasking';

class PolicyInterface {
  constructor(game) {
    this.elements = {
      policyList: '#policy-list'
    };

    this.policyList = {
      ribbonPractice: RibbonPractice,
      smartWork: SmartWork,
      nightOver: NightOver,
      passionPay: PassionPay,
      multitasking: Multitasking
    };

    this.attachEvent(game);
  }

  drawPolicyList(policy) {
    const policyName = this.policyList[policy.getName()];

    $(this.elements.policyList).append(
      `<li id="${policy.getName()}">` +
      `<p>${policy.getKorName()}` +
      '<img class="item-present-img" src="/assets/present.png">' +
      `<span class="t">${policyName.getCost()}</span>` +
      `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
      `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
      '</p>' +
      '</li>'
    );
  } // drawPolicyList

  attachEvent(game) {
    // 정책 채택
    $(this.elements.policyList).delegate('li', 'click', (e) => {
      const { id } = e.currentTarget;

      // 선물이 충분할 경우
      if (game.getTotalPresent() >= this.policyList[id].getCost()) {
        const nextPolicies = this.policyList[id].next();

        game.updateTotalPresent(-1 * this.policyList[id].getCost());
        $(`#${id}`).remove();
        this.policyList[id].execute();

        if (nextPolicies) {
          nextPolicies.forEach((policy) => {
            this.drawPolicyList(policy);
          });
        }
      }
    });
  } // attachHireEvent
}

export default PolicyInterface;
