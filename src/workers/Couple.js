import Worker from './Worker';

class Couple extends Worker {
  static cost = 2000;

  static minOutput = 9;

  static maxOutput = 15;

  constructor() {
    super();

    this.name = 'couple';
    this.korName = '커플';

    this.img = '/assets/couple.png';
  }

  next() {
    return null;
  }
}

export default Couple;
