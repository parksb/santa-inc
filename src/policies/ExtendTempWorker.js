import Game from '../Game';
import Policy from './Policy';
import RegularElf from '../workers/RegularElf';

class ExtendTempWorker extends Policy {
  static cost = 35000;

  constructor() {
    super();

    this.name = 'extendTempWorker';
    this.korName = '비정규직 사용 기간 연장';

    this.description = '이대로만 하면 정직원이 되는거죠?';
    this.spec = '인턴 요정 생산 +2';
  }

  static execute() {
    const workers = Game.getHiredWorkers();

    workers.forEach((worker) => {
      if (worker instanceof RegularElf) {
        worker.setOutput(worker.getOutput() + 2);
      }
    });
  }

  static next() {
    return [];
  }
}

export default ExtendTempWorker;
