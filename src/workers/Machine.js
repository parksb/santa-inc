import Worker from './Worker';
import CyborgElf from './CyborgElf';

class Machine extends Worker {
  constructor() {
    super();

    this.addi = 4;
    this.cost = 1200;
    this.output = 10;
    this.img = '/assets/machine.gif';
    this.name = 'machine';
    this.korName = '선물 기계';
  }

  next() {
    return new CyborgElf();
  }
}

export default Machine;
