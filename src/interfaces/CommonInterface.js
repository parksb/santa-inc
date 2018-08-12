import $ from 'jquery';

class CommonInterface {
  constructor() {
    this.attachEvent();
    this.attachCreditEvent();
    this.attachSoundEvent();
  }

  attachEvent() {
    // 메뉴를 클릭했을 때
    $('#menu li').on('click', (e) => {
      const { id } = e.currentTarget;

      // 모든 메뉴를 off하고 클릭한 메뉴를 on한다.
      $('#hire').attr('class', 'm-off');
      $('#policy').attr('class', 'm-off');
      $('#personnel').attr('class', 'm-off');
      $(`#${id}`).attr('class', 'm-on');

      if (id === 'hire') { // 고용을 클릭하면
        $('#item-list').attr('class', 'list on'); // 고용 리스트를 on한다.
        $('#policy-list').attr('class', 'list off');
        $('#personnel-list').attr('class', 'list off');
      } else if (id === 'policy') { // 정책을 클릭하면
        $('#item-list').attr('class', 'list off');
        $('#policy-list').attr('class', 'list on'); // 정책 리스트를 on한다.
        $('#personnel-list').attr('class', 'list off');
      } else { // 인사를 클릭하면
        $('#item-list').attr('class', 'list off');
        $('#policy-list').attr('class', 'list off');
        $('#personnel-list').attr('class', 'list on'); // 인사 리스트를 on한다.
      }
    });
  } // attachMenuEvent

  attachCreditEvent() {
    $('#top-icon-container .fa-user-friends').on('click', () => {
      const nWidth = 600;
      const nHeight = 500;
      const nPosX = (window.screen.availWidth - nWidth) / 2;
      const nPosY = (window.screen.availHeight - nHeight) / 2;
      const sOption = `width=${nWidth}, height=${nHeight}, top=${nPosY}, left=${nPosX} resizable=no, scrollbars=no, status=no;`;

      window.open('credit.html', '', sOption);
    });
  }

  attachSoundEvent() {
    const audio = new Audio('/assets/audios/RudolphBeingExploited.wav');
    let flag = true;

    audio.volume = 0.3;
    audio.loop = true;
    audio.play();

    $('#top-icon-container .audio-icon').on('click', (e) => {
      if (flag) {
        $(e.currentTarget).attr('class', 'fas fa-play top-icon');
        audio.pause();
        flag = false;
      } else {
        $(e.currentTarget).attr('class', 'fas fa-pause top-icon');
        audio.play();
        flag = true;
      }
    });
  }
}

export default CommonInterface;
