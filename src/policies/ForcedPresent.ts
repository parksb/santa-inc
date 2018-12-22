import Game from '../Game';
import Policy from './Policy';
import BadKidDemo from './BadKidDemo';

class ForcedPresent extends Policy {
  static cost: number = 38000;

  constructor() {
    super();

    this.name = 'forcedPresent';
    this.korName = '선물 강매';

    this.description = '직원들이 자사 제품을 사용하도록 하세요.';
    this.spec = '선물 40000개 추가';
  }

  execute(): void {
    Game.updateTotalPresent(40000);
  }

  next(): Policy[] {
    return [new BadKidDemo()];
  }
}

export default ForcedPresent;
