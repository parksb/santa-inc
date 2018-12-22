import Worker from './Worker';
import CyborgElf from './CyborgElf';

class Machine extends Worker {
  static cost: number = 1500;
  static minOutput: number = 4;
  static maxOutput: number = 10;

  constructor() {
    super();

    this.name = 'machine';
    this.korName = '선물 기계';

    this.img = './assets/machine.gif';
  }

  next(): Worker {
    return new CyborgElf();
  }
}

export default Machine;
