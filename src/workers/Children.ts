import Worker from './Worker';

class Children extends Worker {
  static cost: number = 20000;
  static minOutput: number = 11;
  static maxOutput: number = 13;

  constructor() {
    super();

    this.name = 'children';
    this.korName = '아이들';

    this.img = './assets/children.gif';
  }

  next(): Worker {
    return null;
  }
}

export default Children;
