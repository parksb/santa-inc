import Policy from './Policy';

class SongForSanta extends Policy {
  static cost = 8000;

  constructor() {
    super();

    this.name = 'songForSanta';
    this.korName = '산타 찬양곡 제작';

    this.description = '산타 회장님에 대한 사랑을 담았습니다.';
    this.spec = '그냥 기분이 좋아집니다.';
  }

  static execute() {

  }

  static next() {
    return [];
  }
}

export default SongForSanta;
