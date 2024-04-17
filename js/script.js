let items = document.querySelectorAll('#featureslider-container .carousel .carousel-item');
items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }
// example 4

// As A jQuery Plugin -->
var gallery = $('.gallery a').simpleLightbox({
  /* options */
});


$(document).ready(function(){
  $('#featureCarousel').carousel({});
  $('#featureCarousel').carousel('pause'); 
  var zoomImage = $('#imageZoom');
  var zoomImageExtra = $('#imageZoomExtra');
  var zoomImagePlus = $('#imageZoomExtraPlus');
  var zoomImages = $('.zoom-images');

  zoomImage.imageZoom();
  zoomImageExtra.imageZoom({zoom : 200});
  zoomImagePlus.imageZoom({zoom : 300});

  zoomImages.each(function() {
    $(this).imageZoom();
  });

});

$(window).load(function() {
  $('#nivo-slider-box').nivoSlider();
});
