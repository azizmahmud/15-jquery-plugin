$(document).ready(function(){
  // example 1
      $(".radio-btn").on("click", function() {
        $(".radio-inner").toggleClass("active");
        $("body").toggleClass("dark");
      })
      // example 2
      images = new Array;
      images[0] = "url('../images/wallpaper1.jpg')";
      images[1] = "url('../images/wallpaper2.jpg')";
      images[2] = "url('../images/wallpaper3.jpg')";
      images[3] = "url('../images/wallpaper4.jpg')";
      $("#backgroundChanger").PhotoFlip({
        interval: '3000', 
        transitionTime: '2s',
      }, images);
    // example 3
      $('#background').daisyjs({
        // options here
      });
      // example 4
      $(".portfolio").each(function (index) {
        $(this).attr("id", "img" + (index + 1));
      });
      
      $(".portfolio").each(function () {
        $("#navi").append('<div class="circle"></div>');
      });
      
      $(".circle").each(function (index) {
        $(this).attr("id", "circle" + (index + 1));
      });
      
      $(".portfolio").click(function () {
        if ($(this).hasClass("opened")) {
          $(this).removeClass("opened");
          $(".portfolio").fadeIn("fast");
          $(this).find(".ombra").fadeOut();
          $("#navi div").removeClass("activenav");
        } else {
          var indexi = $("#maincontent .portfolio").index(this) + 1;
          $(this).addClass("opened");
          $(".portfolio").not(this).fadeOut("fast");
          $(this).find(".ombra").fadeIn();
          $("#circle" + indexi).addClass("activenav");
        }
      });
      
      //navi buttons
      $("#navi div").click(function () {
        if ($(this).hasClass("activenav")) {
          return false;
        }
      
        $("#navi div").removeClass("activenav");
        $(".portfolio").removeClass("opened");
        $(".portfolio").show();
        $(".ombra").hide();
      
        var index = $("#navi div").index(this) + 1;
        $("#img" + index).addClass("opened");
        $(".portfolio")
          .not("#img" + index)
          .fadeOut("fast");
        $("#img" + index)
          .find(".ombra")
          .fadeIn();
      
        $(this).addClass("activenav");
      });
    // example 5
    $.as({
        id: "demo",
        folder: "../images",
        images: ["man1.jpeg", "man2.jpeg", "man3.jpeg", "man4.webp", "man5.webp", "man6.webp"],
        imgWidth: 500,
        speed: 2000,
      });
})