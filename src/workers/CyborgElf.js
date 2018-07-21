import Worker from './Worker';
import Couple from './InternElf';

class CyborgElf extends Worker {
  constructor() {
    super();

    this.minOutput = 6;
    this.maxOutput = 12;
    this.output = Math.floor((Math.random() * this.maxOutput) + this.minOutput);

    this.name = 'cyborgElf';
    this.korName = '사이보그 요정';

    this.img = '/assets/cyborg.png';
  }

  next() {
    return new Couple();
  }
}

export default CyborgElf;
