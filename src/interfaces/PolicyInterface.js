import $ from 'jquery';
import RibbonPractice from '../policies/RibbonPractice';
import SmartWork from '../policies/SmartWork';
import NightOver from '../policies/NightOver';

class PolicyInterface {
  constructor() {
    this.elements = {
      policyList: '#policy-list'
    };

    this.policyList = {
      ribbonPractice: RibbonPractice,
      smartWork: SmartWork,
      nightOver: NightOver,
    };
  }

  drawPolicyList(policy) {
    $(this.elements.policyList).append(
      '<li>' +
      `<p>${policy.getKorName()}` +
      '<img class="item-present-img" src="/assets/present.png">' +
      `<span class="t">${policy.getCost()}</span>` +
      `<br/><span style="font-weight:normal;">${policy.getDescription()}</span>` +
      `<br/><span style="font-size:10pt;color:#A0A0A0;font-weight:normal;">${policy.getSpec()}</span>` +
      '</p>' +
      '</li>'
    );
  } // drawPolicyList
}

export default PolicyInterface;
