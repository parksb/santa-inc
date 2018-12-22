import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import RegularElf from '../workers/RegularElf';

class Idea extends Policy {
  static cost: number = 5000;

  constructor() {
    super();

    this.name = 'idea';
    this.korName = '사상 검증';

    this.description = '어느 정당을 지지하세요?';
    this.spec = '정규직 요정 최소 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    RegularElf.addMinOutput(1);
    workerInterface.updateOutputRange('regularElf');
    $('#regularElf .pr').text(`${RegularElf.getMinOutput()} ~ ${RegularElf.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [];
  }
}

export default Idea;
