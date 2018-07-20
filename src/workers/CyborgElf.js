import Worker from './Worker';
import Couple from './InternElf';

class CyborgElf extends Worker {
  constructor() {
    super();

    this.addi = 6;
    this.output = 12;
    this.img = '/assets/cyborg.png';
    this.name = 'cyborgElf';
    this.korName = '사이보그 요정';
  }

  next() {
    return new Couple();
  }
}

export default CyborgElf;
