import Worker from './Worker';
import InternElf from './InternElf';

class Rudolph extends Worker {
  constructor() {
    super();

    this.addi = 1;
    this.output = 2;
    this.img = '/assets/dolf.gif';
    this.name = 'rudolph';
    this.korName = '루돌프';
  }

  next() {
    return new InternElf();
  }
}

export default Rudolph;
