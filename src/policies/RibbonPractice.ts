import Game from '../Game';
import Policy from './Policy';
import SmartWork from './SmartWork';

class RibbonPractice extends Policy {
  static cost: number = 20;

  constructor() {
    super();

    this.name = 'ribbonPractice';
    this.korName = '리본묶기 연습';

    this.description = '생각보다 어렵습니다.';
    this.spec = '선물 상자 클릭할 때 선물 1.2개 생산';
  }

  execute(): void {
    Game.setClickPresent(1.2);
  }

  next(): Policy[] {
    return [new SmartWork()];
  }
}

export default RibbonPractice;
