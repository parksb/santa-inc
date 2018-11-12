import Worker from './Worker';

class Tree extends Worker {
  static cost: number = 2000;
  static minOutput: number = 9;
  static maxOutput: number = 15;

  constructor() {
    super();

    this.name = 'tree';
    this.korName = '트리';

    this.img = '/assets/tree.gif';
  }

  next(): Worker {
    return null;
  }
}

export default Tree;
