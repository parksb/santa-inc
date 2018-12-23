import * as $ from 'jquery';
import Game from '../Game';
import Worker from '../workers/Worker';

class CommonInterface {
  private static instance: CommonInterface;

  private elements: any;

  constructor() {
    if (CommonInterface.instance) {
      return CommonInterface.instance;
    }

    this.elements = {
      playGround: $('#play-ground'),
      presentImg: $('#present-img'),
      creditContainer: $('#credit-container'),
      creditCloseIcon: $('#credit-close-btn'),
      creditIcon: $('#top-icon-container .fa-user-friends'),
      audioIcon: $('#top-icon-container .audio-icon'),
      menuItem: $('#menu li'),
    };

    CommonInterface.instance = this;
  }

  attachPresentEvent(): void {
    this.elements.presentImg.click(() => {
      Game.updateTotalPresent(Game.getClickPresent());
    });
  } // attachPresentEvent

  attachMenuEvent(): void {
    this.elements.menuItem.on('click', (e: JQuery.Event) => {
      const { id } = <HTMLInputElement>e.target;
      const tab: any = {
        hire: '#worker-list',
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
    this.elements.creditIcon.on('click', () => {
      this.elements.creditContainer.css("visibility", "visible").css("opacity", "1");
    });

    this.elements.creditCloseIcon.on('click', () => {
      this.elements.creditContainer.css("visibility", "hidden").css("opacity", "0");
    });
  } // attachCreditEvent

  attachSoundEvent(): void {
    const audio: any = new Audio('./assets/audios/RudolphBeingExploited.wav');
    let flag: boolean = true;

    audio.volume = 0.3;
    audio.loop = true;
    audio.play();

    this.elements.audioIcon.on('click', (e: JQuery.Event) => {
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

  refreshPlayGround(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    this.elements.playGround.html('');
    workers.forEach((worker: Worker) => {
      this.elements.palyGround.append(`<img src="${worker.getImg()}" />`);
    });
  } // refreshPlayGround
}

export default CommonInterface;
