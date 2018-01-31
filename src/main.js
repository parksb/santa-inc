/**
 * Created by Park Seong-beom on 2015-12-03.
 */

import $ from 'jquery';

const PLAY_GROUND = '#play-ground';
const SIDEBAR = '#sidebar';
const MANAGE_LIST = '#manage-list';
const PREVIEW = '.preview';
const ITEM_LIST = '#item-list';

let nPresent = 0; // 전체 선물 수
let nClickPres = 1; // 선물상자를 클릭했을 때 생산되는 선물 수
const aItem = []; // 아이템
let nAddiIncome = 1; // 추가 해고수당

// 배경 음악을 재생한다.
const oBgm = new Audio('sound/exploited_rudolph.wav');
oBgm.addEventListener('ended', function () {
  this.play();
}, false);

// 화면 크기에 따라 레이아웃 크기를 조절한다.
function resizeLayout() {
  const SIDE_WIDTH = 300; // 사이드바의 너비

  $(PLAY_GROUND).css('height', window.innerHeight).css('width', window.innerWidth - SIDE_WIDTH);
  $(SIDEBAR).css('height', window.innerHeight);

  // 윈도우 크기가 변경됐을 때
  $(window).resize(() => {
    $(SIDEBAR).css('height', window.innerHeight);
    $(PLAY_GROUND).css('height', window.innerHeight).css('width', window.innerWidth - SIDE_WIDTH);
  });
}

// 팝업창을 연다 (크레딧 팝업용)
function openPopupWindow(sUrl) {
  const nWidth = 600;
  const nHeight = 500;
  const nPosX = (screen.availWidth - nWidth) / 2;
  const nPosY = (screen.availHeight - nHeight) / 2;
  const sOption = `width=${nWidth}, height=${nHeight}, top=${nPosY}, left=${nPosX}resizable=no, scrollbars=no, status=no;`;

  window.open(`${sUrl}`, '', sOption);
}

const nX = [300, 300, 300, 300, 300, 300, 300, 300]; // 출력 x좌표
const nAddiX = [30, 75, 75, 75, 75, 75, 75, 75]; // 추가할 x좌표 값
const nDefaultY = window.innerHeight / 7;

// 캔버스에 아이템을 출력한다.
function renderItem(sImage, nIndex) {
  const nY = nDefaultY * nIndex + 30;
  nX[nIndex] += nAddiX[nIndex];
  $(PLAY_GROUND).append(`<img src='${sImage}' style='left:${nX[nIndex]}px; top:${nY}px;'/>`);
}

// 아이템 리스트를 출력한다. (아이템 레벨)
function renderItemList(n) {
  $(PREVIEW).remove(); // 다음 아이템 미리보기를 지운다.

  // 새로 열리는 아이템을 출력한다.
  $(ITEM_LIST).append(`<li id='${htItem[n].name}'>` +
    `<img class='item-img' src='${htItem[n].img}'/>` +
    `<p>${htItem[n].k_name}<img class='item-present-img' src='assets/present.png'>` +
    `<span class='t'>${htItem[n].cost}</span>` +
    `<br/><span class='pr'>${htItem[n].addi} ~ ${htItem[n].prod}개 생산</span>` +
    '</p>' +
    '</li>');

  // 다음 아이템 미리보기를 출력한다. (아이템 그림 실루엣)
  $(ITEM_LIST).append(`${"<li class='preview'>" +
    "<img class='item-img preview-img' src='"}${htItem[n + 1].img}'/>` +
    '<p>???<img class=\'item-present-img\' src=\'assets/present.png\'>' +
    `<span class='t'>${htItem[n + 1].cost}</span>` +
    '<br/><span class=\'pr\'>??? ~ ???개 생산</span>' +
    '</p>' +
    '</li>');
}

// 정책 리스트를 출력한다. (정책 레벨)
function renderPolicyList(n) {
  $('#policy-list').append(`${'<li>' +
    '<p>'}${htPolicy[n].k_name}<img class='item-present-img' src='assets/present.png'>` +
    `<span class='t'>${htPolicy[n].cost}</span>` +
    `<br/><span style='font-weight:normal;'>${htPolicy[n].description}</span>` +
    `<br/><span style='font-size:10pt;color:#A0A0A0;font-weight:normal;'>${htPolicy[n].description2}</span>` +
    '</p>' +
    '</li>');
}

// 관리 리스트를 출력한다.
function renderManageList() {
  $(MANAGE_LIST).html(''); // 관리 리스트를 모두 지운다.
  for (let i = 0; i < aItem.length; i++) {
    if (aItem[i].union == 0) {
      $(MANAGE_LIST).append(`<li id='${aItem[i].name}'>` +
        `<img class='item-img' src='${aItem[i].img}'/>` +
        `<p>${aItem[i].k_name}<br/>생산<img class='item-present-img' src='assets/present.png'>` +
        `<span class='t'>${aItem[i].prod}</span>` +
        '</p>' +
        '</li>');
    } else {
      $(MANAGE_LIST).append(`<li id='${aItem[i].name}'>` +
        `<img class='item-img' src='${aItem[i].img}'/>` +
        `<p>${aItem[i].k_name}<span style='color:orangered;font-size:10pt;'> 노조상태!</span><br/>생산<img class='item-present-img' src='assets/present.png'>` +
        `<span class='t'>${aItem[i].prod}</span>` +
        '</p>' +
        '</li>');
    }
  }
}

// 아이템 레벨을 체크, 추가한다.
function checkItemLevel() {
  for (let i = 0; i < htItem.length; i++) {
    // 현재 선물 수가 새로 추가될 아이템 가격보다 크거나 같고, 오픈하지 않은 아이템이라면
    if (nPresent >= htItem[i].cost && htItem[i].lv == false) {
      htItem[i].lv = true; // 해당 아이템을 오픈한다.
      renderItemList(i);
    }
  }
}

// 선물 수를 갱신한다. (추가할 선물)
function updatePresent(n) {
  nPresent += n; // 선물을 추가한다.
  $('#present-num').text(nPresent.toFixed(0)); // 선물상자 아래 총 선물 수를 새로 출력한다.
  checkItemLevel();
}

// 게임 상태를 갱신한다. 1초 마다 호출된다.
function updateGame() {
  let nAllProd = 0; // 총생산량

  for (let j = 0; j < aItem.length; j++) {
    nAllProd += aItem[j].prod; // 아이템들의 개별 생산량을 모두 더한 값
  }

  $('#present-info').text(`1초당 ${nAllProd}개 생산중!`);
  updatePresent(nAllProd);
}

// 정책 선택에 따른 분기를 설정, 처리한다. (정책 레벨)
function updatePolicy(sPolicy) {
  if (sPolicy == 'practice') { // 리본묶기
    nClickPres = 1.2;
    renderPolicyList(1);
  } else if (sPolicy == 'smart-work') { // 스마트 업무 환경
    nClickPres = 1.5;
    renderPolicyList(2);
  } else if (sPolicy == 'night') { // 야근문화
    htItem[0].prod += 1;
    $('#dolf .pr').text(`${htItem[0].addi} ~ ${htItem[0].prod}개 생산`);
    renderPolicyList(3); // 열정페이 오픈
    renderPolicyList(4); // 멀티태스킹 오픈
  } else if (sPolicy == 'pashion') { // 열정페이
    htItem[1].prod += 1;
    $('#elf .pr').text(`${htItem[1].addi} ~ ${htItem[1].prod}개 생산`);
    renderPolicyList(5);
    renderPolicyList(6); // 애사심 오픈
  } else if (sPolicy == 'parttime') { // 알바요정
    nClickPres = 2;
  } else if (sPolicy == 'multi') { // 멀티태스킹
    htItem[0].addi += 1;
    $('#elf .pr').text(`${htItem[1].addi} ~ ${htItem[1].prod}개 생산`);
    renderPolicyList(7);
    renderPolicyList(8);
  } else if (sPolicy == 'love') { // 애사심
    htItem[2].prod += 1;
    $('#elf2 .pr').text(`${htItem[2].addi} ~ ${htItem[2].prod}개 생산`);
  } else if (sPolicy == 'clothduty') { // 정장 착용 의무화
    htItem[2].addi += 1;
    // $("img[src='img/elf2.gif']").attr("src", "img/elf2clo.gif");
    $('#elf2 .pr').text(`${htItem[2].addi} ~ ${htItem[2].prod}개 생산`);
    renderPolicyList(9);
  } else if (sPolicy == 'ideology') { // 사상 검증
    htItem[2].prod += 1;
    $('#elf2 .pr').text(`${htItem[2].addi} ~ ${htItem[2].prod}개 생산`);
    renderPolicyList(10);
  } else if (sPolicy == 'labor-reform') { // 노동개혁
    renderPolicyList(11);
    renderPolicyList(12);
    renderPolicyList(13);
  } else if (sPolicy == 'dissmis') { // 일반해고
    nAddiIncome = 2;
  } else if (sPolicy == 'peak-wage') { // 임금피크
    for (var i = 0; i < aItem.length; i++) {
      aItem[i].prod += 1;
    }
  } else if (sPolicy == 'extend') { // 계약직 기간 연장
    htItem[1].prod += 2;
    $('#elf .pr').text(`${htItem[1].addi} ~ ${htItem[1].prod}개 생산`);
  } else if (sPolicy == 'watchdog') { // 감독관
    for (var i = 0; i < aItem.length; i++) {
      const nUnion = Math.floor(Math.random() * 2);
      aItem[i].prod += 1;
      if (nUnion == 0) {
        aItem[i].union = 1;
        aItem[i].prod = nUnion;
      }
    }
    renderPolicyList(14);
  } else if (sPolicy == 'laboruni-wage') { // 노조 임금
    for (var i = 0; i < aItem.length; i++) {
      if (aItem[i].union == 1) {
        aItem[i].prod += 1;
      }
    }
    renderPolicyList(15);
    renderPolicyList(16);
  } else if (sPolicy == 'laboruni-watch') { // 노조 활동 감시
    for (var i = 0; i < aItem.length; i++) {
      if (aItem[i].union == 1) {
        aItem[i].prod += 1;
      }
    }
  } else if (sPolicy == 'laboruni-issue') { // 노조 소송
    renderPolicyList(17);
  } else if (sPolicy == 'laboruni-destro') { // 노조파괴
    for (var i = 0; i < aItem.length; i++) {
      if (aItem[i].union == 1) {
        aItem[i].union = 0;
        aItem[i].prod = htItem[aItem[i].type].prod;
      }
    }
  }
}

// 아이템을 구입했을 때
$(ITEM_LIST).delegate('li', 'click', function () {
  const COST_RATIO = 3; // 아이템 값 증가 비율
  const nIndex = $(this).index();

  if (nPresent >= htItem[nIndex].cost) { // 아이템을 살 수 있는 선물이 충분하면
    updatePresent(-1 * htItem[nIndex].cost); // 아이템 값을 지불한다.

    htItem[nIndex].num++; // 소지 아이템 수를 증가시킨다.
    htItem[nIndex].cost += Math.floor(htItem[nIndex].cost / COST_RATIO); // 아이템 값을 증가시킨다.
    $(`#${$(this).attr('id')} .t`).text(htItem[nIndex].cost); // 증가한 아이템 값을 출력한다.

    // 아이템 객체를 생성한다. (아이디, 이름, 생산, 해고스토리, 이미지)
    aItem[aItem.length] = new Item(nIndex,
      htItem[nIndex].name + htItem[nIndex].num,
      htItem[nIndex].k_name + htItem[nIndex].num,
      Math.floor(Math.random() * (htItem[nIndex].prod - htItem[nIndex].addi)) + htItem[nIndex].addi,
      htDissStory[Math.floor(Math.random() * htDissStory.length)].msg,
      htItem[nIndex].img,
      0);

    renderManageList();
    renderItem(htItem[nIndex].img, nIndex);
  }
});

// 정책을 구입했을 때
$('#policy-list').delegate('li', 'click', function () {
  const nIndex = $(this).index();

  if (nPresent >= htPolicy[nIndex].cost) { // 정책을 살 수 있는 선물이 충분하면
    updatePresent(-1 * htPolicy[nIndex].cost); // 정책 값을 지불한다.
    htPolicy[nIndex].lv = true; // 정책 채택 여부를 갱신한다.
    updatePolicy(htPolicy[nIndex].name);
    $(this).css('display', 'none'); // 구입한 정책을 화면에 나오지 않게 한다.
  }
});

// 아이템을 삭제했을 때
$('#manage-list').delegate('li', 'click', function () {
  const nIndex = $(this).index();
  const nIncome = aItem[nIndex].prod * 10 * nAddiIncome;

  if (aItem[nIndex].union == 0) {
    if (confirm(`<${aItem[nIndex].k_name}> ${aItem[nIndex].dstory}\n정말 해고하시겠어요?\n선물 ${nIncome}개가 들어옵니다.`)) {
      aItem.splice(nIndex, 1);
      nPresent += nIncome;
      $(`#${$(this).attr('id')}`).fadeOut();
    }
  } else {
    alert('노조상태인 아이템이라 해고할 수 없습니다!');
  }
});

// 메뉴를 클릭했을 때
$('#menu li').click(function () {
  const sId = $(this).attr('id');

  // 모든 메뉴를 off하고 클릭한 메뉴를 on한다.
  $('#hire').attr('class', 'm-off');
  $('#policy').attr('class', 'm-off');
  $('#manage').attr('class', 'm-off');
  $(this).attr('class', 'm-on');

  if (sId == 'hire') { // 고용을 클릭하면
    $('#item-list').attr('class', 'list on'); // 고용 리스트를 on한다.
    $('#policy-list').attr('class', 'list off');
    $('#manage-list').attr('class', 'list off');
  } else if (sId == 'policy') { // 정책을 클릭하면
    $('#item-list').attr('class', 'list off');
    $('#policy-list').attr('class', 'list on'); // 정책 리스트를 on한다.
    $('#manage-list').attr('class', 'list off');
  } else { // 관리를 클릭하면
    $('#item-list').attr('class', 'list off');
    $('#policy-list').attr('class', 'list off');
    $('#manage-list').attr('class', 'list on'); // 관리 리스트를 on한다.
    renderManageList();
  }
});

function isPlaying(audelem) {
  return !audelem.paused;
}

$('#sound-icon').click(function () {
  if (isPlaying(oBgm)) {
    oBgm.pause();
    $(this).attr('src', 'assets/ui/sound-off.png');
  } else {
    oBgm.play();
    $(this).attr('src', 'assets/ui/sound-on.png');
  }
});

$('#credit-icon').click(() => {
  openPopupWindow('credit.html');
});

// 선물상자 클릭 했을 때
$('#present-img').click(() => {
  updatePresent(nClickPres);
});

// 페이지가 로드됐을 때
$(document).ready(() => {
  oBgm.play();
  oBgm.volume = 0.3;
  resizeLayout();
  renderPolicyList(0);
  setInterval(updateGame(), 1000);
});
