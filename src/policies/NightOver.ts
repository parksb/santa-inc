import * as $ from 'jquery';
import Policy from './Policy';
import PassionPay from './PassionPay';
import Multitasking from './Multitasking';
import Rudolph from '../workers/Rudolph';

class NightOver extends Policy {
  static cost: number = 150;

  constructor() {
    super();

    this.name = 'nightOver';
    this.korName = '야근문화';

    this.description = '루돌프는 코가 빛나서 밤에 일하기 적합합니다.';
    this.spec = '루돌프 최대 생산 +1';
  }

  execute(): void {
    Rudolph.addMaxOutput(1);
    $('#rudolph .pr').text(`${Rudolph.getMinOutput()} ~ ${Rudolph.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [new PassionPay(), new Multitasking()];
  }
}

export default NightOver;
