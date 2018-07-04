class worker {
  constructor(output) {
    this.addi = 0;
    this.cost = 0;
    this.name = '';
    this.korName = '';
    this.output = output;
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

  next() { }
}

export default worker;
