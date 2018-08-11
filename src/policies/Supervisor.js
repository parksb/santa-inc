import Policy from './Policy';
import Game from '../Game';

class Supervisor extends Policy {
  static cost = 9000;

  constructor() {
    super();

    this.name = 'supervisor';
    this.korName = '감독관 배치';

    this.description = '거기 루돌프12, 똑바로 안하지?';
    this.spec = '모든 직원 생산 +1';
  }

  static execute() {
    const workers = Game.getHiredWorkers();

    workers.forEach((worker) => {
      worker.setOutput(worker.getOutput() + 1);
    });
  }

  static next() {
    return [];
  }
}

export default Supervisor;
