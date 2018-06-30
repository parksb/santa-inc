import worker from './worker';
import internElf from './internElf';

class rudolph extends worker {
  constructor(output) {
    super(output);

    this.addi = 1;
    this.cost = 30;
    this.name = 'rudolph';
    this.korName = '루돌프';
  }

  next() {
    return new internElf();
  }
}

export default rudolph;
