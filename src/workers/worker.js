class Worker {
  constructor() {
    this.addi = 0;
    this.name = '';
    this.korName = '';
    this.output = 0;
    this.img = '';
  }

  static getCost() {
    return this.cost;
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

  getAddi() {
    return this.addi;
  }

  getOutput() {
    return this.output;
  }

  static increaseCost() {
    const costRatio = 3;
    this.cost += Math.floor(this.cost / costRatio);
  }

  next() { }
}

export default Worker;
