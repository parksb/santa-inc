import Worker from './Worker';
import RegularElf from './RegularElf';

class InternElf extends Worker {
  constructor() {
    super();

    this.minOutput = 2;
    this.maxOutput = 5;

    this.output = Math.floor((Math.random() * this.maxOutput) + this.minOutput);

    this.name = 'internElf';
    this.korName = '인턴 요정';

    this.img = '/assets/elf.gif';
  }

  next() {
    return new RegularElf();
  }
}

export default InternElf;
