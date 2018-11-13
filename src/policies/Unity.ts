import Game from '../Game';
import PersonnelInterface from '../interfaces/PersonnelInterface';
import Policy from './Policy';
import Worker from '../workers/Worker';
import RegularElf from '../workers/RegularElf';

class Unity extends Policy {
  static cost: number = 650;

  constructor() {
    super();

    this.name = 'unity';
    this.korName = '단합대회';

    this.description = '생산3팀! 화이팅!';
    this.spec = '정규직 요정 생산 +1';
  }

  execute(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    workers.forEach((worker: Worker) => {
      if (worker instanceof RegularElf) {
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

export default Unity;
