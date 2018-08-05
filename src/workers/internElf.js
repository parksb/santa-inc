import Worker from './Worker';
import RegularElf from './RegularElf';

class InternElf extends Worker {
  static cost = 50;

  static minOutput = 2;

  static maxOutput = 5;

  constructor() {
    super();

    this.name = 'internElf';
    this.korName = '인턴 요정';

    this.img = '/assets/elf.gif';
  }

  next() {
    return new RegularElf();
  }
}

export default InternElf;
