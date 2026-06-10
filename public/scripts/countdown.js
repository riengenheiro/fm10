jQuery(document).ready(function ($) {
  function rotateEl() {
    $('#block-countdown .countdown i').toggleClass('rotateIn');
  }
  window.setInterval(rotateEl, 2000);
  var cd = {
    om_countdown_type: 'timer',
    om_countdown_time: '900',
    om_countdown_date: '',
    om_countdown_color: '#FFC107',
    om_countdown_action: 'restart',
    om_countdown_url: '',
    om_countdown_new_headline: '',
  };
  function startCountDown_fm() {
    if (cd.om_countdown_type === 'timer') {
      var d = new Date();
      d.setSeconds(d.getSeconds() + parseInt(cd.om_countdown_time));
      var r = d;
    } else {
      var r = new Date(cd.om_countdown_date);
    }
    $('.clock-fm')
      .countdown(new Date(r))
      .on('update.countdown', function (event) {
        var f = '';
        if (event.offset.hours > 0) {
          f +=
            '<div>%H<br><span class="countdown-time">hora%!H:s;</span></div>';
        } else {
          f += '<div>00<br><span class="countdown-time">horas</span></div>';
        }
        if (event.offset.minutes > 0) {
          f +=
            '<div>%M<br><span class="countdown-time">minuto%!M:s;</span></div>';
        } else {
          f += '<div>00<br><span class="countdown-time">minutos</span></div>';
        }
        if (event.offset.seconds > 0) {
          f +=
            '<div>%S<br><span class="countdown-time">segundo%!S:s;</span></div>';
        } else {
          f += '<div>00<br><span class="countdown-time">segundos</span></div>';
        }
        $(this).html(event.strftime(f));
      })
      .on('finish.countdown', function () {
        startCountDown_fm();
      });
  }
  startCountDown_fm();
});
