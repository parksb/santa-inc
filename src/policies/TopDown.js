import Game from '../Game';
import Policy from './Policy';
import SongForSanta from './SongForSanta';
import ForcedPresent from './ForcedPresent';
import ForcedStock from './ForcedStock';

class TopDown extends Policy {
  static cost = 20000;

  constructor() {
    super();

    this.name = 'topDown';
    this.korName = '탑다운 경영';

    this.description = '직원들이 상부 지시에 따라 일사불란하게 행동합니다.';
    this.spec = '모든 직원 생산 +2';
  }

  static execute() {
    const workers = Game.getHiredWorkers();

    workers.forEach((worker) => {
      worker.setOutput(worker.getOutput() + 1);
    });
  }

  static next() {
    return [new SongForSanta(), new ForcedPresent(), new ForcedStock()];
  }
}

export default TopDown;
