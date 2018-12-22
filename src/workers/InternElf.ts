import Worker from './Worker';
import RegularElf from './RegularElf';

class InternElf extends Worker {
  static cost: number = 200;
  static minOutput: number = 2;
  static maxOutput: number = 5;

  constructor() {
    super();

    this.name = 'internElf';
    this.korName = '인턴 요정';

    this.img = './assets/internElf.gif';
  }

  next(): Worker {
    return new RegularElf();
  }
}

export default InternElf;
