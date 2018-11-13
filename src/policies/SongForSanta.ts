import Policy from './Policy';

class SongForSanta extends Policy {
  static cost: number = 8000;

  constructor() {
    super();

    this.name = 'songForSanta';
    this.korName = '산타 찬양곡 제작';

    this.description = '산타 회장님에 대한 사랑을 담았습니다.';
    this.spec = '그냥 기분이 좋아집니다.';
  }

  execute(): void {
    console.log(`
    울면 안돼 울면 안돼
    산타할아버지는 우는 아이에겐 선물을 안 주신대
    산타할아버지는 알고 계신대 누가 착한 앤지 나쁜 애인지
    오늘밤에 다녀가신대

    잠 잘 때나 일어날 때 짜증낼 때 장난할 때도 
    산타할아버지는 모든 것을 알고 계신대
    울면 안돼 울면 안돼 
    산타할아버지는 우리 마을을 오늘 밤에 다녀가신대
    `);
  }

  next(): Policy[] {
    return [];
  }
}

export default SongForSanta;
