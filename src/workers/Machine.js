import Worker from './Worker';
import CyborgElf from './CyborgElf';

class Machine extends Worker {
  constructor() {
    super();

    this.minOutput = 4;
    this.maxOutput = 10;
    this.output = Math.floor((Math.random() * this.maxOutput) + this.minOutput);

    this.name = 'machine';
    this.korName = '선물 기계';

    this.img = '/assets/machine.gif';
  }

  next() {
    return new CyborgElf();
  }
}

export default Machine;
