class Policy {
  static cost = 0;

  constructor() {
    this.name = '';
    this.korName = '';

    this.description = '';
    this.spec = '';
  }

  static getCost() {
    return this.cost;
  }

  static next() {
    return null;
  }

  static execute() {
    throw new Error('execute() must be implemented.');
  }

  getName() {
    return this.name;
  }

  getKorName() {
    return this.korName;
  }

  getDescription() {
    return this.description;
  }

  getSpec() {
    return this.spec;
  }
}

export default Policy;
