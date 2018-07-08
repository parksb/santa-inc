import Worker from './Worker';
import RegularElf from './RegularElf';

class InternElf extends Worker {
  constructor() {
    super();

    this.addi = 2;
    this.cost = 200;
    this.output = 5;
    this.img = '/assets/elf.gif';
    this.name = 'internElf';
    this.korName = '인턴 요정';
  }

  next() {
    return new RegularElf();
  }
}

export default InternElf;
