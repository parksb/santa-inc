class Policy {
  constructor() {
    this.cost = 0;

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
    throw new Error('next() must be implemented.');
  }

  execute() {
    throw new Error('execute() must be implemented.');
  }
}

export default Policy;
