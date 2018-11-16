import Policy from './Policy';
import Game from '../Game';
import Worker from '../workers/Worker';
import PersonnelInterface from '../interfaces/PersonnelInterface';
import TopDown from './TopDown';

class Supervisor extends Policy {
  static cost: number = 9000;

  constructor() {
    super();

    this.name = 'supervisor';
    this.korName = '감독관 배치';

    this.description = '거기 루돌프12, 똑바로 안하지?';
    this.spec = '모든 직원 생산 +1';
  }

  execute(): void {
    const personnelInterface: PersonnelInterface = new PersonnelInterface();
    const workers: Worker[] = Game.getHiredWorkers();

    workers.forEach((worker: Worker) => {
      worker.setOutput(worker.getOutput() + 1);
      personnelInterface.updateOutput(worker.getName(), worker.getOutput());
      Game.addTotalOutput(1);
    });
  }

  next(): Policy[] {
    return [new TopDown()];
  }
}

export default Supervisor;
