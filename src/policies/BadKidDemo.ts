import Policy from './Policy';
import Children from '../workers/Children';
import WorkerInterface from '../interfaces/WorkerInterface';

class BadKidDemo extends Policy {
  static cost: number = 40000;

  constructor() {
    super();

    this.name = 'badKidDemo';
    this.korName = '나쁜 어린이 규탄 집회 후원';

    this.description = '누구도 모르게 집회를 후원합니다.';
    this.spec = '아이들 최대 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    Children.addMaxOutput(1);
    workerInterface.updateOutputRange('children');
  }

  next(): Policy[] {
    return [];
  }
}

export default BadKidDemo;
