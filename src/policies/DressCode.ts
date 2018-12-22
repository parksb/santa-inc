import Game from '../Game';
import CommonInterface from '../interfaces/CommonInterface';
import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import Worker from '../workers/Worker';
import RegularElf from '../workers/RegularElf';
import Wd40 from './Wd40';

class DressCode extends Policy {
  static cost = 5000;

  constructor() {
    super();

    this.name = 'dressCode';
    this.korName = '정장 착용 의무화';

    this.description = '나중에는 사내 유니폼을 만들 예정입니다.';
    this.spec = '정규직 요정 최소 생산 +1';
  }

  execute() {
    const commonInterface:CommonInterface = new CommonInterface();
    const workerInterface: WorkerInterface = new WorkerInterface();
    const workers: Worker[] = Game.getHiredWorkers();

    RegularElf.addMinOutput(1);
    workerInterface.updateOutputRange('regularElf');

    workers.forEach((worker: Worker) => {
      if (worker instanceof RegularElf) {
        worker.setImg('./assets/regularElfSuit.gif');
        commonInterface.refreshPlayGround();
      }
    });

    RegularElf.img = './assets/regularElfSuit.gif';
  }

  next() {
    return [new Wd40()];
  }
}

export default DressCode;
