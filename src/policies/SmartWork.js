import NightOver from './NightOver';

class SmartWork {
  static cost = 100;

  constructor() {
    this.name = 'smart-work';
    this.korName = '스마트 업무 환경';

    this.description = '일을 더 빠르고 쉽게!';
    this.spec = '선물상자 클릭할 때 선물 1.5개 생산';
  }

  next() {
    return [new NightOver()];
  }
}

export default SmartWork;
