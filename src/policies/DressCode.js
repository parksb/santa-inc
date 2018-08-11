import $ from 'jquery';
import Policy from './Policy';
import RegularElf from '../workers/RegularElf';

class DressCode extends Policy {
  static cost = 1500;

  constructor() {
    super();

    this.name = 'dressCode';
    this.korName = '정장 착용 의무화';

    this.description = '나중에는 사내 유니폼을 만들 예정입니다.';
    this.spec = '정규직 요정 최소 생산 +1';
  }

  static execute() {
    RegularElf.addMinOutput(1);
    $('#regularElf .pr').text(`${RegularElf.getMinOutput()} ~ ${RegularElf.getMaxOutput()}개 생산`);
  }

  static next() {
    return [];
  }
}

export default DressCode;
