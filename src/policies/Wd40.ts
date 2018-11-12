import Game from '../Game';
import Policy from './Policy';
import Worker from '../workers/Worker';
import CyborgElf from '../workers/CyborgElf';
import PersonnelInterface from '../interfaces/PersonnelInterface';

class Wd40 extends Policy {
  static cost: number = 5000;

  constructor() {
    super();

    this.name = 'wd40';
    this.korName = 'WD-40 보급';

    this.description = '4차 산업혁명 시대의 필수품입니다.';
    this.spec = '요정봇 생산 +1';
  }

  execute(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    workers.forEach((worker: Worker) => {
      if (worker instanceof CyborgElf) {
        worker.setOutput(worker.getOutput() + 1);
        PersonnelInterface.updateOutput(worker.getName(), worker.getOutput());
        Game.addTotalOutput(1);
      }
    });
  }

  next(): Policy[] {
    return [];
  }
}

export default Wd40;
