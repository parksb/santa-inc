import $ from 'jquery';
import Game from '../Game';
import Policy from './Policy';
import RegularElf from '../workers/RegularElf';

class Unity extends Policy {
  static cost = 650;

  constructor() {
    super();

    this.name = 'unity';
    this.korName = '단합대회';

    this.description = '생산3팀! 화이팅!';
    this.spec = '정규직 요정 생산 +1';
  }

  static execute() {
    const workers = Game.getHiredWorkers();

    workers.forEach((worker) => {
      if (worker.getName() instanceof RegularElf) {
        worker.setOutput(worker.getOutput() + 1);
      }
    });
  }

  static next() {
    return [];
  }
}

export default Unity;
