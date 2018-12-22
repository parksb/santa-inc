import Worker from './Worker';
import Tree from './Tree';

class CyborgElf extends Worker {
  static cost: number = 5000;
  static minOutput: number = 6;
  static maxOutput: number = 12;

  constructor() {
    super();

    this.name = 'cyborgElf';
    this.korName = '요정봇';

    this.img = './assets/cyborg.gif';
  }

  next(): Worker {
    return new Tree();
  }
}

export default CyborgElf;
