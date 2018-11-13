import Game from '../Game';
import PersonnelInterface from '../interfaces/PersonnelInterface';
import Policy from './Policy';
import Worker from '../workers/Worker';
import RegularElf from '../workers/RegularElf';

class ExtendTempWorker extends Policy {
  static cost: number = 35000;

  constructor() {
    super();

    this.name = 'extendTempWorker';
    this.korName = '비정규직 사용 기간 연장';

    this.description = '이대로만 하면 정직원이 되는거죠?';
    this.spec = '인턴 요정 생산 +2';
  }

  execute(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    workers.forEach((worker: Worker) => {
      if (worker instanceof RegularElf) {
        worker.setOutput(worker.getOutput() + 2);
        PersonnelInterface.updateOutput(worker.getName(), worker.getOutput());
        Game.addTotalOutput(2);
      }
    });
  }

  next(): Policy[] {
    return [];
  }
}

export default ExtendTempWorker;
