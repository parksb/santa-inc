import Worker from './Worker';
import RegularElf from './RegularElf';

class InternElf extends Worker {
  static cost = 50;

  constructor() {
    super();

    this.minOutput = 2;
    this.maxOutput = 5;
    this.output = this.initializeOutput();

    this.name = 'internElf';
    this.korName = '인턴 요정';

    this.img = '/assets/elf.gif';
  }

  next() {
    return new RegularElf();
  }
}

export default InternElf;
