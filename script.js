$(document).ready(function () {
  // display current day
$('#currentTime').text(moment().format('dddd, MMMM Do'));
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
     $('.time-block').each(function () {
       var hourBlock = parseInt($(this).attr('id').split('-')[1]);
      if (hourBlock < currentHour) {
        $(this).addClass('past');
      } else if (hourBlock === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
      
     })
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load saved data from localStorage
   $('.time-block').each(function ()
   {
     $(this).children('.description').val(localStorage.getItem($(this).attr('id')))
   })
  });
  