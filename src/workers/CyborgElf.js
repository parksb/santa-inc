import Worker from './Worker';
import Couple from './Couple';

class CyborgElf extends Worker {
  static cost = 1000;

  constructor() {
    super();

    this.minOutput = 6;
    this.maxOutput = 12;
    this.output = this.initializeOutput();

    this.name = 'cyborgElf';
    this.korName = '사이보그 요정';

    this.img = '/assets/cyborg.png';
  }

  next() {
    return new Couple();
  }
}

export default CyborgElf;
