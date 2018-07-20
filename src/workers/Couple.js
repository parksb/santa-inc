import Worker from './Worker';

class Couple extends Worker {
  constructor() {
    super();

    this.addi = 9;
    this.output = 15;
    this.img = '/assets/couple.gif';
    this.name = 'couple';
    this.korName = '커플';
  }

  next() {
    return null;
  }
}

export default Couple;
