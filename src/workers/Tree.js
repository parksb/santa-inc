import Worker from './Worker';

class Tree extends Worker {
  static cost = 2000;

  static minOutput = 9;

  static maxOutput = 15;

  constructor() {
    super();

    this.name = 'tree';
    this.korName = '트리';

    this.img = '/assets/tree.gif';
  }

  next() {
    return null;
  }
}

export default Tree;
