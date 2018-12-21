import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import CyborgElf from '../workers/CyborgElf';

class Idea extends Policy {
  static cost: number = 20000;

  constructor() {
    super();

    this.name = 'idea';
    this.korName = '사상 검증';

    this.description = '어느 정당을 지지하세요?';
    this.spec = '요정봇 최소 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    CyborgElf.addMinOutput(1);
    workerInterface.updateOutputRange('cyborgElf');
    $('#regularElf .pr').text(`${CyborgElf.getMinOutput()} ~ ${CyborgElf.getMaxOutput()}개 생산`);
  }

  next(): Policy[] {
    return [];
  }
}

export default Idea;
