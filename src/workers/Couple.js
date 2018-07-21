import Worker from './Worker';

class Couple extends Worker {
  constructor() {
    super();

    this.minOutput = 9;
    this.maxOutput = 15;
    this.output = this.initializeOutput();

    this.name = 'couple';
    this.korName = '커플';

    this.img = '/assets/couple.gif';
  }

  next() {
    return null;
  }
}

export default Couple;
