import Worker from './Worker';
import ParttimeElf from './ParttimeElf';

class Rudolph extends Worker {
  static cost: number = 1;
  static minOutput: number = 1;
  static maxOutput: number = 2;

  constructor() {
    super();

    this.name = 'rudolph';
    this.korName = '루돌프';

    this.img = '/assets/rudolph.gif';
  }

  next(): Worker {
    return new ParttimeElf();
  }
}

export default Rudolph;
