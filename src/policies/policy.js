class Policy {
  static cost = 0;

  constructor() {
    this.name = '';
    this.korName = '';

    this.description = '';
    this.spec = '';
  }

  getCost() {
    return this.cost;
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

  next() {
    return null;
  }

  execute() {
    throw new Error('execute() must be implemented.');
  }
}

export default Policy;
