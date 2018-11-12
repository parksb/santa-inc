import * as $ from 'jquery';
import Policy from './Policy';
import Idea from './Idea';
import RegularElf from '../workers/RegularElf';

class CompanyLover extends Policy {
  static cost: number = 20000;

  constructor() {
    super();

    this.name = 'companyLover';
    this.korName = '애사심 테스트';

    this.description = '회사를 위해서라면 뭐든 할 수 있겠죠.';
    this.spec = '정규직 요정 최대 생산 +1';
  }

  execute(): void {
    RegularElf.addMaxOutput(1);
    $('#regularElf .pr').text(`${RegularElf.getMinOutput()} ~ ${RegularElf.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [new Idea()];
  }
}

export default CompanyLover;
