$(document).ready(function () {

     // Click, double Click, and mouseleave - JS
     let pre_text = $('#mouseEffects').text();
     $('#mouseEffects').on({
          click: function () {
               $(this).html("clicked on p tag - " + pre_text);
               $(this).css({
                    "color": "red"
               });
          },
          dblclick: function () {
               $(this).html("Double clicked on p tag - " + pre_text);
               $(this).css({
                    "color": "orange"
               });
          },
          mouseleave: function () {
               $(this).html("Mouse leaved on p tag - " + pre_text);
               $(this).css({
                    "color": "Blue"
               });
          }
     });

     // Hide, Show, Diffrent Ways of Traversing, Arrow Function Used- JS

     // children
     $("#hs").children("button:first").click(() => {
          $("#hs p").hide();
     });

     // siblings
     $("#hs").children("button:first").next().click(() => {
          $('#hs p').show();
     });

     // filtering
     $("#hs").children("button").last().click(() => {
          $('#hs p').toggle();
     });


     // Slide Up and Slide Down, Also eq() method- JS
     $("#flip :button").eq(0).click(function () {
          $("#panel").slideDown("slow");
     });
     $("#flip :button").eq(1).click(function () {
          $("#panel").slideUp("slow");
     });



     // Animation and Chaining - JS
     $("#animation-box").mouseover((function () {
          for (let i = 0; i < 5; i++) {
               $(this).animate({
                    "margin-left": '600px',
                    "opacity": "0.1"
               }).animate({
                    "margin-left": '1196px',
                    "opacity": "1"
               }).animate({
                    "margin-left": '600px',
                    "opacity": "0.1"
               }).animate({
                    "margin-left": '0',
                    "opacity": "1"
               });
          }
     }));


     // Adding, removing and toggleling Class - JS 
     $('#art :button:first').click(function () {
          $(this).parent().addClass('blue');
     });
     $('#art :button:nth-child(2)').click(function () {
          $(this).parent().removeClass('blue');
     });
     $('#art :button:last').click(function () {
          $(this).parent().toggleClass('blue');
     });

     // if windows resize background color changes to light blue
     $(window).resize(function () {
          $("body").css("background-color", "#a4c2ff");
     });


     // owlcarousel2
     $(".owl-carousel").owlCarousel({
          "items": 4,
          "loop": true,
          "autoplay": true

     });

     // masonry
     $('.grid').masonry({
          columnWidth: '.grid-sizer',
          itemSelector: '.grid-item',
          percentPosition: true,
          horizontalOrder: true,
          fitWidth: true
     });

     // flexslider
     $('.flexslider').flexslider({
          animation: "slide",
          animationLoop: true,
          itemWidth: 800,
     });

});