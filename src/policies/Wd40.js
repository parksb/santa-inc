import Game from '../Game';
import Policy from './Policy';
import CyborgElf from '../workers/CyborgElf';
import PersonnelInterface from '../interfaces/PersonnelInterface';

class Wd40 extends Policy {
  static cost = 5000;

  constructor() {
    super();

    this.name = 'wd40';
    this.korName = 'WD-40 보급';

    this.description = '4차 산업혁명 시대의 필수품입니다.';
    this.spec = '요정봇 생산 +1';
  }

  static execute() {
    const workers = Game.getHiredWorkers();

    workers.forEach((worker) => {
      if (worker instanceof CyborgElf) {
        worker.setOutput(worker.getOutput() + 1);
        PersonnelInterface.updateOutput(worker.getName(), worker.getOutput());
        Game.addTotalOutput(1);
      }
    });
  }

  static next() {
    return [];
  }
}

export default Wd40;
