class Worker {
  constructor() {
    this.minOutput = 0;
    this.maxOutput = 0;
    this.output = this.initializeOutput();

    this.name = '';
    this.korName = '';

    this.img = '';
  }

  static getCost() {
    return this.cost;
  }

  static increaseCost() {
    const costRatio = 3;
    this.cost += Math.floor(this.cost / costRatio);
  }

  getName() {
    return this.name;
  }

  getImg() {
    return this.img;
  }

  getKorName() {
    return this.korName;
  }

  getMinOutput() {
    return this.minOutput;
  }

  getMaxOutput() {
    return this.maxOutput;
  }

  getOutput() {
    return this.output;
  }

  initializeOutput() {
    return Math.floor((Math.random() * (this.maxOutput - this.minOutput + 1))) + this.minOutput;
  }

  next() {
    throw new Error('next() must be implemented.');
  }
}

export default Worker;
