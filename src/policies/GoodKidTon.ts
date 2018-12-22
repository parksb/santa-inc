import Game from '../Game';
import Policy from './Policy';
import Worker from '../workers/Worker';
import PersonnelInterface from '../interfaces/PersonnelInterface';

class GoodKidTon extends Policy {
  static cost: number = 500;
  static n: number = 1;

  constructor() {
    super();

    this.name = 'goodKidTon';
    this.korName = `제${GoodKidTon.n}회 착한 어린이 대회 개최`;

    this.description = '산타께서는 모든 것을 알고 계십니다.';
    this.spec = '무작위 직원 생산 +1';
  }

  getCost(): number {
    return GoodKidTon.cost;
  }

  execute(): void {
    const personnelInterface: PersonnelInterface = new PersonnelInterface();
    const workers: Worker[] = Game.getHiredWorkers();
    const worker: Worker = workers[Math.floor(Math.random() * workers.length)];

    if (worker) {
      worker.setOutput(worker.getOutput() + 1);
      personnelInterface.updateOutput(worker.getName(), worker.getOutput());
      Game.addTotalOutput(1);
    }
  }

  next(): Policy[] {
    const costRatio: number = 5;

    GoodKidTon.n += 1;
    GoodKidTon.cost += Math.floor(GoodKidTon.cost / costRatio);

    return [new GoodKidTon()];
  }
}

export default GoodKidTon;
