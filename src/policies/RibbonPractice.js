import Game from '../Game';
import SmartWork from './SmartWork';

class RibbonPractice {
  static cost = 20;

  constructor() {
    this.name = 'ribbon-practice';
    this.korName = '리본묶기 연습';

    this.description = '생각보다 어렵습니다.';
    this.spec = '선물상자 클릭할 때 선물 1.2개 생산';
  }

  execute() {
    Game.setClickPresent(1.2);
  }

  next() {
    return [new SmartWork()];
  }
}

export default RibbonPractice;
