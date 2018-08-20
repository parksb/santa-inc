import Worker from './Worker';
import InternElf from './InternElf';

class Rudolph extends Worker {
  static cost = 1;

  static minOutput = 1;

  static maxOutput = 2;

  constructor() {
    super();

    this.name = 'rudolph';
    this.korName = '루돌프';

    this.img = '/assets/rudolph.gif';
  }

  next() {
    return new InternElf();
  }
}

export default Rudolph;
