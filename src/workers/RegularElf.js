import Worker from './Worker';
import Machine from './Machine';

class RegularElf extends Worker {
  constructor() {
    super();

    this.minOutput = 2;
    this.maxOutput = 7;
    this.output = Math.floor((Math.random() * this.maxOutput) + this.minOutput);

    this.name = 'regularElf';
    this.korName = '정규직 요정';

    this.img = '/assets/elf2.gif';
  }

  next() {
    return new Machine();
  }
}

export default RegularElf;
