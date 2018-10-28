class Worker {
  static cost = 0;

  static minOutput = 0;

  static maxOutput = 0;

  constructor() {
    this.output = 0;
    this.level = 1;
    this.levelCost = 0;

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

  static addMinOutput(val) {
    this.minOutput += val;
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

  getLevel() {
    return this.level;
  }

  getLevelCost() {
    return this.levelCost;
  }

  setOutput(val) {
    this.output = val;
  }

  setName(name) {
    this.name = name;
  }

  setKorName(korName) {
    this.korName = korName;
  }

  setLevelCost(val) {
    this.levelCost = val;
  }

  setImg(path) {
    this.img = path;
  }

  initializeOutput(min, max) {
    this.output = Math.floor((Math.random() * (max - min + 1))) + min;
  }

  increaseLevel() {
    const levelCostRatio = 3;
    const outputRatio = 10;

    this.level += 1;
    this.levelCost += Math.floor(this.levelCost / levelCostRatio);
    this.output += Math.ceil(this.output / outputRatio);
  }

  next() {
    throw new Error('next() must be implemented.');
  }
}

export default Worker;
