import Game from '../Game';
import Policy from './Policy';
import GoodKidTon from './GoodKidTon';

class ForcedStock extends Policy {
  static cost: number = 55000;

  constructor() {
    super();

    this.name = 'forcedStock';
    this.korName = '주식 강매';

    this.description = '노동이 아닌 다른 방법으로 회사에 기여할 수 있습니다.';
    this.spec = '선물 80000개 추가';
  }

  execute(): void {
    Game.updateTotalPresent(80000);
  }

  next(): Policy[] {
    return [new GoodKidTon()];
  }
}

export default ForcedStock;
