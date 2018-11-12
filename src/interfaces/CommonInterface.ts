import * as $ from 'jquery';
import Game from '../Game';
import Worker from '../workers/Worker';

class CommonInterface {
  constructor() {
    this.attachMenuEvent();
    this.attachCreditEvent();
    this.attachSoundEvent();
  }

  attachMenuEvent(): void {
    $('#menu li').on('click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.target;
      const tab: any = {
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

  attachCreditEvent(): void {
    $('#top-icon-container .fa-user-friends').on('click', () => {
      const width: number = 600;
      const height: number = 500;
      const posX: number = (window.screen.availWidth - width) / 2;
      const posY: number = (window.screen.availHeight - height) / 2;
      const option: string = `width=${width}, height=${height}, top=${posY}, left=${posX} resizable=no, scrollbars=no, status=no;`;

      window.open('credit.html', '', option);
    });
  } // attachCreditEvent

  attachSoundEvent(): void {
    const audio: any = new Audio('/assets/audios/RudolphBeingExploited.wav');
    let flag: boolean = true;

    audio.volume = 0.3;
    audio.loop = true;
    audio.play();

    $('#top-icon-container .audio-icon').on('click', (e: JQuery.Event) => {
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

  static refreshPlayGround(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    $('#play-ground').html('');
    workers.forEach((worker: Worker) => {
      $('#play-ground').append(`<img src="${worker.getImg()}" />`);
    });
  } // refreshPlayGround
}

export default CommonInterface;
