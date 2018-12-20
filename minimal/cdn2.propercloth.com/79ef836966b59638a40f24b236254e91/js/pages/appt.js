jQuery(document).ready(function ($) {

  $('.appt .slider').slick({
    slide: '.day',
    slidesToShow: 7,
    slidesToScroll: 7,
    speed: 400,
    waitForAnimate: false,
    cssEase: 'cubic-bezier(.3,0,.1,1)',
    //initialSlide: (slideNum - 1),
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.day').on('click', function(e){
    // When Day is clicked
    e.preventDefault();
    if (!$(this).hasClass('disabled')) {
      $('.day').removeClass('selected');
      $(this).addClass('selected');
    }
    if ($('.day').hasClass('selected')) {
      $('.time-grid').addClass('visible');
    }
    $('.time.selected').removeClass('selected');
  });

  $('.time').on('click', function(e){
    // When Time is clicked
    e.preventDefault();
    if (!$(this).hasClass('disabled')) {
      $('.time').removeClass('selected');
      $(this).addClass('selected');
    }
  });

  $('.time-grid .time').click(function(e) {
    e.preventDefault();
    $this = $(this);
    if ($this.hasClass('disabled')) {
      return false;
    }
    $('#appointment_confirmation, #appointment_cancel').fadeOut();
    $('#ahref_appointment').attr('date_stamp', $('.day.selected').data('date'));
    $('#ahref_appointment').attr('time_id', $this.data('id'));
    $('#date_time_text').text($('.day.selected').data('date-text')+' at '+$('.time.selected a').text());
    $('#modal_schedule_appointment').modal('show');
    $('#user_name').focus();
    return false;
  });

  $('#ahref_appointment').click(function() {
      $('.btn').addClass('disabled');
      $('.message-danger').hide();
      $user_name = $('#user_name').val();
      $user_email = $('#user_email').val();
      $user_comment = $('#user_comment').val();
      $date_stamp = $(this).attr('date_stamp');
      $time_id = $(this).attr('time_id');

      // BEGIN GA send data
      // var now_timestamp = parseInt(new Date().getTime()) / 1000;
      // var appointment_timestamp = $date_stamp;

      // var secdiff = now_timestamp - appointment_timestamp;
      // var mindiff = Math.floor(secdiff / 60);
      // secdiff = secdiff % 60;
      // var hourdiff = Math.floor(mindiff / 60);
      // mindiff = mindiff % 60;
      // var daydiff = Math.abs(Math.floor(hourdiff / 24));

      // ga('send', 'event', 'ScheduleAppointment', 'Click', daydiff+'days');
      // END GA send data

      if ($user_name.length == 0) {
          $('.message-danger').text('Please enter your name to schedule an appointment.').slideToggle(300);
          $('.btn').removeClass('disabled');
          return false;
      }

      if ($user_email.length == 0 || !isEmail($user_email)) {
          $('.message-danger').text('Please enter your email address to schedule an appointment.').slideToggle(300);
          $('.btn').removeClass('disabled');
          return false;
      }

      if ($user_name.length > 0 && $user_email.length > 0 && isEmail($user_email)) {
          $.ajax({
              url: BASE_URL+"sb-scheduling-appointment.php",
              dataType: "json",
              data: {
                  date_stamp: $date_stamp,
                  time_id: $time_id,
                  user_name: $user_name,
                  user_email: $user_email,
                  user_comment: $user_comment,
                  action: 'insert_appointment'
              },
              type: "post",
              success: function(data) {
                  if (data.slots_open_counts <= 0) {
                    $('.time.selected').removeClass('selected').addClass('disabled');
                  }
              }
          });
      }

      $('#appointment_confirmation').text('Your appointment for '+$('#date_time_text').text()+' is confirmed.').fadeIn();
      $('#modal_schedule_appointment').modal('hide');
      $('#user_name, #user_email, #user_comment').val('');
      $('.btn').removeClass('disabled');

      date_intervals_open_hours[$date_stamp]['left'] = date_intervals_open_hours[$date_stamp]['left'] - 1;
      $('.day.selected span').text(date_intervals_open_hours[$date_stamp]['left']+' LEFT');

      return false;
  });
});

Vue.config.debug = false;
var ApptTimeGrid = new Vue({
  el: '.time-grid',
  data: {
    date: '',
    hours: {}
  },
  ready: function() {
    var self = this;

    $('.day').on('click', function(e) {
      self.date = $(this).data('date');
      self.hours = date_intervals_open_hours[self.date]['open_hours'];
    });
  }
});
