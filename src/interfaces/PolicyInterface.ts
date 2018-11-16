import * as $ from 'jquery';
import Game from '../Game';
import Policy from '../policies/Policy';
import RibbonPractice from '../policies/RibbonPractice';
import SmartWork from '../policies/SmartWork';
import NightOver from '../policies/NightOver';
import SplitParttimeWage from '../policies/SplitParttimeWage';
import PassionPay from '../policies/PassionPay';
import Multitasking from '../policies/Multitasking';
import Supervisor from '../policies/Supervisor';
import Limitless from '../policies/Limitless';
import Unity from '../policies/Unity';
import Subcontract from '../policies/Subcontract';
import CompanyLover from '../policies/CompanyLover';
import DressCode from '../policies/DressCode';
import Wd40 from '../policies/Wd40';
import ExtendTempWorker from '../policies/ExtendTempWorker';
import ForcedPresent from '../policies/ForcedPresent';
import ForcedStock from '../policies/ForcedStock';
import Idea from '../policies/Idea';
import SongForSanta from '../policies/SongForSanta';
import TopDown from '../policies/TopDown';

class PolicyInterface {
  private static instance: PolicyInterface;

  private elements: any;
  private policyList: any;

  constructor() {
    if (PolicyInterface.instance) {
      return PolicyInterface.instance;
    }

    this.elements = {
      policyList: '#policy-list'
    };

    this.policyList = {
      ribbonPractice: RibbonPractice,
      smartWork: SmartWork,
      nightOver: NightOver,
      splitParttimeWage: SplitParttimeWage,
      passionPay: PassionPay,
      multitasking: Multitasking,
      supervisor: Supervisor,
      limitless: Limitless,
      unity: Unity,
      subcontract: Subcontract,
      companyLover: CompanyLover,
      dressCode: DressCode,
      wd40: Wd40,
      extendTempWorker: ExtendTempWorker,
      forcedPresent: ForcedPresent,
      forcedStock: ForcedStock,
      idea: Idea,
      songForSanta: SongForSanta,
      topDown: TopDown
    };

    PolicyInterface.instance = this;
  }

  drawPolicyList(policy: Policy): void {
    const policyClass: any = policy.constructor;

    $(this.elements.policyList).append(
      `<li id="${policy.getName()}">` +
      `<p>${policy.getKorName()}` +
      '<img class="item-present-img" src="/assets/present.png">' +
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
      const policy: Policy = new this.policyList[id]();
      const policyClass: any = this.policyList[id];

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
