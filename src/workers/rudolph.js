import Worker from './Worker';
import InternElf from './InternElf';

class Rudolph extends Worker {
  constructor() {
    super();

    this.minOutput = 1;
    this.maxOutput = 2;
    this.output = Math.floor((Math.random() * this.maxOutput) + this.minOutput);

    this.name = 'rudolph';
    this.korName = '루돌프';

    this.img = '/assets/dolf.gif';
  }

  next() {
    return new InternElf();
  }
}

export default Rudolph;
