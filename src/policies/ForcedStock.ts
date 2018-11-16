import Game from '../Game';
import CommonInterface from '../interfaces/CommonInterface';
import PersonnelInterface from '../interfaces/PersonnelInterface';
import Policy from './Policy';
import Worker from '../workers/Worker';
import Machine from '../workers/Machine';
import Tree from '../workers/Tree';

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
    const personnelInterface: PersonnelInterface = new PersonnelInterface();
    const commonInterface: CommonInterface = new CommonInterface();
    const workers: Worker[] = Game.getHiredWorkers();

    Game.updateTotalPresent(80000);

    workers.forEach((worker: Worker) => {
      if (!(worker instanceof Machine) && !(worker instanceof Tree)) {
        if (Math.round(Math.random())) {
          Game.addTotalOutput(-1 * worker.getOutput());

          worker.setOutput(0);
          worker.setImg('/assets/couple.png');

          personnelInterface.updateOutput(worker.getName(), worker.getOutput());
          commonInterface.refreshPlayGround();
        }
      }
    });
  }

  next(): Policy[] {
    return [];
  }
}

export default ForcedStock;
