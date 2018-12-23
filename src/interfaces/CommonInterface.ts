import * as $ from 'jquery';
import Game from '../Game';
import Worker from '../workers/Worker';

class CommonInterface {
  private static instance: CommonInterface;

  constructor() {
    if (CommonInterface.instance) {
      return CommonInterface.instance;
    }

    CommonInterface.instance = this;
  }

  attachPresentEvent(): void {
    $('#present-img').click(() => {
      Game.updateTotalPresent(Game.getClickPresent());
    });
  } // attachPresentEvent

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
      $("#credit-container").css("visibility", "visible").css("opacity", "1");
    });

    $("#credit-close-btn").on('click', () => {
        $("#credit-container").css("visibility", "hidden").css("opacity", "0");
    });
  } // attachCreditEvent

  attachSoundEvent(): void {
    const audio: any = new Audio('./assets/audios/RudolphBeingExploited.wav');
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

  refreshPlayGround(): void {
    const workers: Worker[] = Game.getHiredWorkers();

    $('#play-ground').html('');
    workers.forEach((worker: Worker) => {
      $('#play-ground').append(`<img src="${worker.getImg()}" />`);
    });
  } // refreshPlayGround
}

export default CommonInterface;
