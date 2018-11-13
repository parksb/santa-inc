import Game from '../Game';
import Policy from './Policy';

class ForcedPresent extends Policy {
  static cost: number = 38000;

  constructor() {
    super();

    this.name = 'forcedPresent';
    this.korName = '선물 강매';

    this.description = '직원들이 자사 제품을 사용하도록 하세요.';
    this.spec = '선물 50000개 추가';
  }

  execute(): void {
    Game.updateTotalPresent(50000);
  }

  next(): Policy[] {
    return [];
  }
}

export default ForcedPresent;
