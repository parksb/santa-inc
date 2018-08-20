import Policy from './Policy';
import Game from '../Game';
import DressCode from './DressCode';

class Subcontract extends Policy {
  static cost = 800;

  constructor() {
    super();

    this.name = 'subcontract';
    this.korName = '하도급';

    this.description = '그쪽은 우리 직원 아닌데요?';
    this.spec = '선물 상자 클릭할 때 선물 2개 생산';
  }

  static execute() {
    Game.setClickPresent(2);
  }

  static next() {
    return [new DressCode()];
  }
}

export default Subcontract;
