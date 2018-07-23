import $ from 'jquery';

class CommonInterface {
  constructor() {
    this.attachEvent();
  }

  attachEvent() {
    // 메뉴를 클릭했을 때
    $('#menu li').on('click', (e) => {
      const { id } = e.currentTarget;

      // 모든 메뉴를 off하고 클릭한 메뉴를 on한다.
      $('#hire').attr('class', 'm-off');
      $('#policy').attr('class', 'm-off');
      $('#manage').attr('class', 'm-off');
      $(id).attr('class', 'm-on');

      if (id === 'hire') { // 고용을 클릭하면
        $('#item-list').attr('class', 'list on'); // 고용 리스트를 on한다.
        $('#policy-list').attr('class', 'list off');
        $('#manage-list').attr('class', 'list off');
      } else if (id === 'policy') { // 정책을 클릭하면
        $('#item-list').attr('class', 'list off');
        $('#policy-list').attr('class', 'list on'); // 정책 리스트를 on한다.
        $('#manage-list').attr('class', 'list off');
      } else { // 인사를 클릭하면
        $('#item-list').attr('class', 'list off');
        $('#policy-list').attr('class', 'list off');
        $('#manage-list').attr('class', 'list on'); // 인사 리스트를 on한다.
      }
    });
  } // attachMenuEvent
}

export default CommonInterface;
