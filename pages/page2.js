$(document).ready(function(){
  $('.slick-slider-wraper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  // example 2
  $(".demo1").bootstrapNews({

    onStop: null,
    onPause: null,
    onReset: null,
    onPrev: null,
    onNext: null,
    onToDo: null
  
  });
  // example 3
  $('#vidBox').VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video1",
      maxweight: "640",
      idvideo: "v1",
      pausevideo:true

  });
  // example 4
  window.pagObj = $('#pagination').twbsPagination({
    totalPages: 35,
    visiblePages: 10,
    onPageClick: function (event, page) {
        console.info(page + ' (from options)');
    }
    }).on('page', function (event, page) {
        console.info(page + ' (from event listening)');
    });
    // example 5
    var $imageupload = $('.imageupload');
            $imageupload.imageupload();

            $('#imageupload-disable').on('click', function() {
                $imageupload.imageupload('disable');
                $(this).blur();
            })

            $('#imageupload-enable').on('click', function() {
                $imageupload.imageupload('enable');
                $(this).blur();
            })

            $('#imageupload-reset').on('click', function() {
                $imageupload.imageupload('reset');
                $(this).blur();
            });

})