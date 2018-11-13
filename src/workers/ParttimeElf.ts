import Worker from './Worker';
import InternElf from './InternElf';

class ParttimeElf extends Worker {
  static cost: number = 30;
  static minOutput: number = 1;
  static maxOutput: number = 3;

  constructor() {
    super();

    this.name = 'parttimeElf';
    this.korName = '알바 요정';

    this.img = '/assets/parttimeElf.gif';
  }

  next(): Worker {
    return new InternElf();
  }
}

export default ParttimeElf;
