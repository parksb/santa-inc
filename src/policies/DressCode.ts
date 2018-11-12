import * as $ from 'jquery';
import Game from '../Game';
import Policy from './Policy';
import Worker from '../workers/Worker';
import RegularElf from '../workers/RegularElf';
import CommonInterface from '../interfaces/CommonInterface';
import Wd40 from './Wd40';

class DressCode extends Policy {
  static cost = 1500;

  constructor() {
    super();

    this.name = 'dressCode';
    this.korName = '정장 착용 의무화';

    this.description = '나중에는 사내 유니폼을 만들 예정입니다.';
    this.spec = '정규직 요정 최소 생산 +1';
  }

  execute() {
    const workers: Worker[] = Game.getHiredWorkers();

    RegularElf.addMinOutput(1);
    $('#regularElf .pr').text(`${RegularElf.getMinOutput()} ~ ${RegularElf.getMaxOutput()}개 생산`);

    workers.forEach((worker: Worker) => {
      if (worker instanceof RegularElf) {
        worker.setImg('/assets/regularElfSuit.gif');
        CommonInterface.refreshPlayGround();
      }
    });
  }

  next() {
    return [new Wd40()];
  }
}

export default DressCode;
