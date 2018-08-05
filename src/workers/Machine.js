import Worker from './Worker';
import CyborgElf from './CyborgElf';

class Machine extends Worker {
  static cost = 300;

  static minOutput = 4;

  static maxOutput = 10;

  constructor() {
    super();

    this.name = 'machine';
    this.korName = '선물 기계';

    this.img = '/assets/machine.gif';
  }

  next() {
    return new CyborgElf();
  }
}

export default Machine;
