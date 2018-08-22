import $ from 'jquery';
import Game from '../Game';

class CommonInterface {
  constructor() {
    this.attachMenuEvent();
    this.attachCreditEvent();
    this.attachSoundEvent();
  }

  attachMenuEvent() {
    $('#menu li').on('click', (e) => {
      const { id } = e.currentTarget;
      const tab = {
        hire: '#item-list',
        policy: '#policy-list',
        personnel: '#personnel-list'
      };

      $('.m-list').removeClass('m-on').addClass('m-off');
      $(`#${id}`).removeClass('m-off').addClass('m-on');

      $('.list').removeClass('on').addClass('off');
      $(`${tab[id]}`).removeClass('off').addClass('on');
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
  } // attachCreditEvent

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
  } // attachSoundEvent

  static refreshPlayGround() {
    const workers = Game.getHiredWorkers();

    $('#play-ground').html('');
    workers.forEach((worker) => {
      $('#play-ground').append(`<img src="${worker.getImg()}" />`);
    });
  } // refreshPlayGround
}

export default CommonInterface;
