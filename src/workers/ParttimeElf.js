import Worker from './Worker';
import InternElf from './InternElf';

class ParttimeElf extends Worker {
  static cost = 30;

  static minOutput = 1;

  static maxOutput = 3;

  constructor() {
    super();

    this.name = 'parttimeElf';
    this.korName = '알바 요정';

    this.img = '/assets/parttimeElf.gif';
  }

  next() {
    return new InternElf();
  }
}

export default ParttimeElf;
