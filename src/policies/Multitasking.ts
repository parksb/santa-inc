import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import Subcontract from './Subcontract';
import Unity from './Unity';
import Supervisor from './Supervisor';
import InternElf from '../workers/InternElf';

class Multitasking extends Policy {
  static cost: number = 400;

  constructor() {
    super();

    this.name = 'multitasking';
    this.korName = '멀티태스킹';

    this.description = '인턴 요정은 의외로 많은 일을 할 수 있습니다.';
    this.spec = '인턴 요정 최소 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    InternElf.addMaxOutput(1);
    workerInterface.updateOutputRange('internElf');
  }

  next(): Policy[] {
    return [new Subcontract(), new Unity(), new Supervisor()];
  }
}

export default Multitasking;
