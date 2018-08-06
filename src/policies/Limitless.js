import $ from 'jquery';
import Policy from './Policy';
import InternElf from '../workers/InternElf';

class Limitless extends Policy {
  static cost = 500;

  constructor() {
    super();

    this.name = 'limitless';
    this.korName = '무기계약';

    this.description = '이거 정규직이랑 같은 거예요.';
    this.spec = '인턴 요정 최소 생산 +1';
  }

  static execute() {
    InternElf.addMinOutput(1);
    $('#internElf .pr').text(`${InternElf.getMinOutput()} ~ ${InternElf.getMaxOutput()}개 생산`);
  }

  static next() {
    return [];
  }
}

export default Limitless;
