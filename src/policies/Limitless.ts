import * as $ from 'jquery';
import Policy from './Policy';
import InternElf from '../workers/InternElf';

class Limitless extends Policy {
  static cost: number = 500;

  constructor() {
    super();

    this.name = 'limitless';
    this.korName = '무기계약';

    this.description = '평생 계약직으로 일할 수 있습니다.';
    this.spec = '인턴 요정 최소 생산 +1';
  }

  execute(): void {
    InternElf.addMinOutput(1);
    $('#internElf .pr').text(`${InternElf.getMinOutput()} ~ ${InternElf.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [];
  }
}

export default Limitless;
