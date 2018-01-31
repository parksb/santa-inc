/**
 * Created by Park Seong-beom on 2015-12-02.
 */

function Item(type, name, k_name, prod, dstory, img, union) {
  this.type = type;
  this.name = name;
  this.k_name = k_name;
  this.prod = prod;
  this.dstory = dstory;
  this.img = img;
  this.union = 0;
}

const htDissStory = [{
  msg: '17개월 아이가 있습니다.'
}, {
  msg: '12개월 아이가 있습니다.'
}, {
  msg: '4개월 아이가 있습니다.'
}, {
  msg: '7살짜리 아이가 있습니다.'
}, {
  msg: '사직서를 품고 있지만 꺼낸 적은 없습니다.'
}, {
  msg: '혼자 살고 있습니다.'
}, {
  msg: '얼마전 결혼했습니다.'
}, {
  msg: '2년만에 취업했습니다.'
}, {
  msg: '3년만에 취업했습니다.'
}, {
  msg: '4년만에 취업했습니다.'
}, {
  msg: '6년만에 취업했습니다.'
}, {
  msg: '산타를 믿습니다.'
}, {
  msg: '일에 자부심을 느끼고 있습니다.'
}, {
  msg: '크리스마스를 홀로 보냈습니다.'
}, {
  msg: '모태솔로입니다.'
}, {
  msg: '오늘 아침 웃으며 인사했습니다.'
}, {
  msg: '오늘 생일입니다.'
}];

const htItem = [{
  k_name: '루돌프',
  name: 'dolf',
  img: 'assets/dolf.gif',
  num: 0,
  prod: 2,
  addi: 1,
  cost: 30,
  lv: false
}, {
  k_name: '인턴 요정',
  name: 'elf',
  img: 'assets/elf.gif',
  num: 0,
  prod: 5,
  addi: 2,
  cost: 200,
  lv: false
}, {
  k_name: '정규직 요정',
  name: 'elf2',
  img: 'assets/elf2.gif',
  num: 0,
  prod: 7,
  addi: 2,
  cost: 600,
  lv: false
}, {
  k_name: '선물 기계',
  name: 'machine',
  img: 'assets/machine.gif',
  num: 0,
  prod: 10,
  addi: 4,
  cost: 1200,
  lv: false
}, {
  k_name: '사이보그 요정',
  name: 'cyborg',
  img: 'assets/cyborg.png',
  num: 0,
  prod: 12,
  addi: 6,
  cost: 3000,
  lv: false
}, {
  k_name: '아이들',
  name: 'children',
  img: 'assets/children.gif',
  num: 0,
  prod: 10,
  addi: 4,
  cost: 6000,
  lv: false
}, {
  k_name: '커플',
  name: 'couple',
  img: 'assets/couple.png',
  num: 0,
  prod: 15,
  addi: 9,
  cost: 10000,
  lv: false
}];

const htPolicy = [{ // 0
  k_name: '리본묶기 연습',
  name: 'practice',
  description: '생각보다 어렵습니다.',
  description2: '선물상자 클릭할 때 선물 1.2개 생산',
  cost: 20
}, {
  k_name: '스마트 업무 환경',
  name: 'smart-work',
  description: '일을 더 빠르고 쉽게!',
  description2: '선물상자 클릭할 때 선물 1.5개 생산',
  cost: 100
}, {
  k_name: '야근문화',
  name: 'night',
  description: '루돌프는 코가 빛나서 밤에 일하기 적합합니다.',
  description2: '루돌프 최대 생산 +1',
  cost: 150
}, {
  k_name: '열정페이',
  name: 'pashion',
  description: '너 이 일 좋아하잖아? 그냥 해줄 수 없어?',
  description2: '인턴 요정 최대 생산 +1',
  cost: 300
}, {
  k_name: '멀티태스킹',
  name: 'multi',
  description: '요정은 의외로 많은 일을 할 수 있습니다.',
  description2: '인턴 요정 최소 생산 +1',
  cost: 350
}, { // 5
  k_name: '알바 요정 채용',
  name: 'parttime',
  description: '모집. 선물설계보조 ○명',
  description2: '선물상자 클릭할 때 선물 2개 생산',
  cost: 800
}, {
  k_name: '애사심 테스트',
  name: 'love',
  description: '회사를 위해서라면 뭐든 할 수 있겠죠.',
  description2: '정규직 요정 최대 생산 +1',
  cost: 900
}, {
  k_name: '정장 착용 의무화',
  name: 'clothduty',
  description: '곧 사내 유니폼을 만들 예정입니다.',
  description2: '정규직 요정 최소 생산 +1',
  cost: 1500
}, {
  k_name: '사상검증',
  name: 'ideology',
  description: '어느 정당을 지지하세요?',
  description2: '정규직 요정 최대 생산 +1',
  cost: 1400
}, {
  k_name: '노동개혁',
  name: 'labor-reform',
  description: '노동개혁으로 루돌프와 요정에게 일자리를!',
  description2: '노동개혁 프로젝트 시작',
  cost: 30000
}, { // 10
  k_name: '감독관 배치',
  name: 'watchdog',
  description: '거기 루돌프12, 똑바로 안하지?',
  description2: '현재 소지한 모든 아이템 생산 +1',
  cost: 19000
}, {
  k_name: '일반해고',
  name: 'dissmis',
  description: '노동시장 유연화를 위한 정책입니다.',
  description2: '모든 아이템 해고 수입 x2',
  cost: 8000
}, {
  k_name: '임금피크제',
  name: 'peak-wage',
  description: '청년 루돌프 일자리를 창출합니다.',
  description2: '현재 소지한 모든 아이템 생산 +2',
  cost: 28000
}, {
  k_name: '비정규직 사용기간 연장',
  name: 'extend',
  description: '이대로만 하면 정직원이 되는거죠?',
  description2: '인턴 요정 최대 생산 +2',
  cost: 35000
}, {
  k_name: '노조원 급여 감축',
  name: 'laboruni-wage',
  description: '노조에 가입했다고? 나랑 싸우고 싶은거야?',
  description2: '노조상태 아이템 생산 +1',
  cost: 500
}, {
  k_name: '노조 활동 감시',
  name: 'laboruni-watch',
  description: '망원경, 카메라, 녹음기, 모든 걸 사용하세요.',
  description2: '노조상태 아이템 생산 +1',
  cost: 25000
}, {
  k_name: '노조 소송',
  name: 'laboruni-issue',
  description: '디스 이즈 코리아 스타일!',
  description2: '노조 파괴를 위한 첫 걸음',
  cost: 50000
}, { // 17
  k_name: '노조 파괴',
  name: 'laboruni-destro',
  description: '마지막 단계입니다.',
  description2: '노조상태 아이템 원상복귀',
  cost: 70000
}];
