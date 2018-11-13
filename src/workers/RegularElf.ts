import Worker from './Worker';
import Machine from './Machine';

class RegularElf extends Worker {
  static cost: number = 100;
  static minOutput: number = 2;
  static maxOutput: number = 7;

  constructor() {
    super();

    this.name = 'regularElf';
    this.korName = '정규직 요정';

    this.img = '/assets/regularElf.gif';
  }

  next(): Worker {
    return new Machine();
  }
}

export default RegularElf;
