import WorkerInterface from '../interfaces/WorkerInterface';
import Policy from './Policy';
import Limitless from './Limitless';
import InternElf from '../workers/InternElf';

class PassionPay extends Policy {
  static cost: number = 300;

  constructor() {
    super();

    this.name = 'passionPay';
    this.korName = '열정페이';

    this.description = '너 이 일 좋아하잖아? 그냥 해줄 수 없어?';
    this.spec = '인턴 요정 최대 생산 +1';
  }

  execute(): void {
    const workerInterface: WorkerInterface = new WorkerInterface();

    InternElf.addMaxOutput(1);
    workerInterface.updateOutputRange('internElf');
  }

  next(): Policy[] {
    return [new Limitless()];
  }
}

export default PassionPay;
