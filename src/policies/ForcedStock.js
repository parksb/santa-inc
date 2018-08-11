import Game from '../Game';
import Policy from './Policy';

class ForcedStock extends Policy {
  static cost = 55000;

  constructor() {
    super();

    this.name = 'forcedStock';
    this.korName = '주식 강매';

    this.description = '노동이 아닌 다른 방법으로 회사에 기여할 수 있습니다.';
    this.spec = '선물 100000개 추가';
  }

  static execute() {
    Game.updateTotalPresent(200000);
  }

  static next() {
    return [];
  }
}

export default ForcedStock;
