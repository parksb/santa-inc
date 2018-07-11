import Worker from './Worker';
import Machine from './Machine';

class RegularElf extends Worker {
  constructor() {
    super();

    this.addi = 2;
    this.cost = 600;
    this.output = 7;
    this.img = '/assets/elf2.gif';
    this.name = 'regularElf';
    this.korName = '정규직 요정';
  }

  next() {
    return new Machine();
  }
}

export default RegularElf;
