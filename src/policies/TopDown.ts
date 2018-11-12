import Game from '../Game';
import PersonnelInterface from '../interfaces/PersonnelInterface';
import Policy from './Policy';
import Worker from '../workers/Worker';
import SongForSanta from './SongForSanta';
import ForcedPresent from './ForcedPresent';
import ForcedStock from './ForcedStock';

class TopDown extends Policy {
  static cost: number = 20000;

  constructor() {
    super();

    this.name = 'topDown';
    this.korName = '탑다운 경영';

    this.description = '직원들이 상부 지시에 따라 일사불란하게 행동합니다.';
    this.spec = '모든 직원 생산 +2';
  }

  execute(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    workers.forEach((worker: Worker) => {
      worker.setOutput(worker.getOutput() + 2);
      PersonnelInterface.updateOutput(worker.getName(), worker.getOutput());
      Game.addTotalOutput(2);
    });
  }

  next(): Policy[] {
    return [new SongForSanta(), new ForcedPresent(), new ForcedStock()];
  }
}

export default TopDown;
