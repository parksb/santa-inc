class worker {
  constructor(output) {
    this.addi = 1;
    this.cost = 30;
    this.name = 'rudolph';
    this.korName = '루돌프';
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
}

export default worker;
