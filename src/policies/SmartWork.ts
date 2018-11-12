import Game from '../Game';
import Policy from './Policy';
import NightOver from './NightOver';
import SplitParttimeWage from './SplitParttimeWage';

class SmartWork extends Policy {
  static cost: number = 100;

  constructor() {
    super();

    this.name = 'smartWork';
    this.korName = '스마트 업무 환경';

    this.description = '일을 더 빠르고 쉽게!';
    this.spec = '선물 상자 클릭할 때 선물 1.5개 생산';
  }

  execute(): void {
    Game.setClickPresent(1.5);
  }

  next(): Policy[] {
    return [new NightOver(), new SplitParttimeWage()];
  }
}

export default SmartWork;
