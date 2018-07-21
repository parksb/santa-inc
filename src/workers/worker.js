class Worker {
  constructor() {
    this.minOutput = 0;
    this.maxOutput = 0;
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

  next() { }
}

export default Worker;
