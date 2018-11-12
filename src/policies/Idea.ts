import * as $ from 'jquery';
import Policy from './Policy';
import CyborgElf from '../workers/CyborgElf';

class Idea extends Policy {
  static cost: number = 20000;

  constructor() {
    super();

    this.name = 'idea';
    this.korName = '사상 검증';

    this.description = '어느 정당을 지지하세요?';
    this.spec = '사이보그 요정 최소 생산 +1';
  }

  execute(): void {
    CyborgElf.addMinOutput(1);
    $('#regularElf .pr').text(`${CyborgElf.getMinOutput()} ~ ${CyborgElf.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [];
  }
}

export default Idea;
