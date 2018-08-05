class Worker {
  static cost = 0;

  static minOutput = 0;

  static maxOutput = 0;

  constructor() {
    this.output = 0;

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

  static getMinOutput() {
    return this.minOutput;
  }

  static getMaxOutput() {
    return this.maxOutput;
  }

  static addMaxOutput(val) {
    this.maxOutput += val;
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

  getOutput() {
    return this.output;
  }

  initializeOutput(min, max) {
    this.output = Math.floor((Math.random() * (max - min + 1))) + min;
  }

  next() {
    throw new Error('next() must be implemented.');
  }
}

export default Worker;
