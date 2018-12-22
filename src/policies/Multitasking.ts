import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import Subcontract from './Subcontract';
import Unity from './Unity';
import Supervisor from './Supervisor';
import ParttimeElf from '../workers/ParttimeElf';

class Multitasking extends Policy {
  static cost: number = 800;

  constructor() {
    super();

    this.name = 'multitasking';
    this.korName = '멀티태스킹';

    this.description = '알바 요정은 의외로 많은 일을 할 수 있습니다.';
    this.spec = '알바 요정 최소 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    ParttimeElf.addMinOutput(1);
    workerInterface.updateOutputRange('parttimeElf');
  }

  next(): Policy[] {
    return [new Subcontract(), new Unity(), new Supervisor()];
  }
}

export default Multitasking;
