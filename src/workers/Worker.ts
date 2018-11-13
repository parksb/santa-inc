abstract class Worker {
  static cost: number = 0;
  static minOutput: number = 0;
  static maxOutput: number = 0;

  protected output: number;
  protected level: number;
  protected levelCost: number;

  protected name: string;
  protected korName: string;

  protected img: string;

  constructor() {
    this.output = 0;
    this.level = 1;
    this.levelCost = 0;

    this.name = '';
    this.korName = '';

    this.img = '';
  }

  static getCost(): number {
    return this.cost;
  }

  static increaseCost(): void {
    const costRatio: number = 3;
    this.cost += Math.floor(this.cost / costRatio);
  }

  static getMinOutput(): number {
    return this.minOutput;
  }

  static getMaxOutput(): number {
    return this.maxOutput;
  }

  static addMaxOutput(val: number): void {
    this.maxOutput += val;
  }

  static addMinOutput(val: number): void {
    this.minOutput += val;
  }

  getName(): string {
    return this.name;
  }

  getImg(): string {
    return this.img;
  }

  getKorName(): string {
    return this.korName;
  }

  getOutput(): number {
    return this.output;
  }

  getLevel(): number {
    return this.level;
  }

  getLevelCost(): number {
    return this.levelCost;
  }

  setOutput(val: number): void {
    this.output = val;
  }

  setName(name: string): void {
    this.name = name;
  }

  setKorName(korName: string): void {
    this.korName = korName;
  }

  setLevelCost(val: number): void {
    this.levelCost = val;
  }

  setImg(path: string): void {
    this.img = path;
  }

  initializeOutput(min: number, max: number): void {
    this.output = Math.floor((Math.random() * (max - min + 1))) + min;
  }

  increaseLevel(): void {
    const levelCostRatio: number = 3;
    const outputRatio: number = 10;

    this.level += 1;
    this.levelCost += Math.floor(this.levelCost / levelCostRatio);
    this.output += Math.ceil(this.output / outputRatio);
  }

  abstract next(): Worker;
}

export default Worker;
