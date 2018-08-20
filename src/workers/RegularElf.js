import Worker from './Worker';
import Machine from './Machine';

class RegularElf extends Worker {
  static cost = 100;

  static minOutput = 2;

  static maxOutput = 7;

  constructor() {
    super();

    this.name = 'regularElf';
    this.korName = '정규직 요정';

    this.img = '/assets/regularElf.gif';
  }

  next() {
    return new Machine();
  }
}

export default RegularElf;
