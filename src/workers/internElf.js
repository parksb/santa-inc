import Worker from './Worker';

class InternElf extends Worker {
  constructor() {
    super();

    this.addi = 1;
    this.cost = 30;
    this.output = 3;
    this.img = '/assets/elf.gif';
    this.name = 'internElf';
    this.korName = '인턴요정';
  }
}

export default InternElf;
