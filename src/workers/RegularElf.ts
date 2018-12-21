import Worker from './Worker';
import Machine from './Machine';

class RegularElf extends Worker {
  static cost: number = 500;
  static minOutput: number = 2;
  static maxOutput: number = 7;

  static img: string = '/assets/regularElf.gif';

  constructor() {
    super();

    this.name = 'regularElf';
    this.korName = '정규직 요정';

    this.img = RegularElf.img;
  }

  next(): Worker {
    return new Machine();
  }
}

export default RegularElf;
