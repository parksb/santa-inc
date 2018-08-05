import Worker from './Worker';
import Couple from './Couple';

class CyborgElf extends Worker {
  static cost = 1000;

  static minOutput = 6;

  static maxOutput = 12;

  constructor() {
    super();

    this.name = 'cyborgElf';
    this.korName = '사이보그 요정';

    this.img = '/assets/cyborg.png';
  }

  next() {
    return new Couple();
  }
}

export default CyborgElf;
