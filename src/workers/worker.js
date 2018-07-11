class Worker {
  constructor() {
    this.addi = 0;
    this.cost = 0;
    this.name = '';
    this.korName = '';
    this.output = 0;
    this.img = '';
  }

  getCost() {
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

  setCost(cost) {
    this.cost = cost;
  }

  next() { }
}

export default Worker;
