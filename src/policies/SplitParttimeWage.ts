import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import ParttimeElf from '../workers/ParttimeElf';

class SplitParttimeWage extends Policy {
  static cost: number = 200;

  constructor() {
    super();

    this.name = 'splitParttimeWage';
    this.korName = '임금 꺾기';

    this.description = '이제 15분 단위로 근로시간을 측정합니다.';
    this.spec = '알바 요정 최대 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    ParttimeElf.addMaxOutput(1);
    workerInterface.updateOutputRange('parttimeElf');
  }

  next(): Policy[] {
    return [];
  }
}

export default SplitParttimeWage;
