abstract class Policy {
  static cost: number = 0;

  protected name: string;
  protected korName: string;

  protected description: string;
  protected spec: string;

  constructor() {
    this.name = '';
    this.korName = '';

    this.description = '';
    this.spec = '';
  }

  static getCost(): number {
    return this.cost;
  }

  getName(): string {
    return this.name;
  }

  getKorName(): string {
    return this.korName;
  }

  getDescription(): string {
    return this.description;
  }

  getSpec(): string {
    return this.spec;
  }

  abstract execute(): void;

  abstract next(): Policy[];
}

export default Policy;
