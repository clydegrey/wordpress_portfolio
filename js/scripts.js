
var portfolio = {};



// $('.jarallax').jarallax({
//     speed: 0.2
// });


// $('.parallax-window').parallax();


// $('.parallax-window').parallax({imageSrc: 'http://feelgrafix.com/data/background/background-1.jpg'});



$(".parallax-window").parallax({

  y: "-10%"

});




$(".workThumbs li").hide();
$(".workThumbs li").filter(function () {
  return ($(this).attr('data-hide')==='1')
}).show();


portfolio.init = function(){


  $('.btn-svg').each(function(){
    var 
      $this = $(this),
      width = $this.outerWidth(),
      height = $this.outerHeight(),
      $svg = $this.find('svg'),
      $rect = $svg.find('rect'),
      totalPerimeter = width*2+height*2;
        
    $svg[0].setAttribute('viewBox', '0 0 '+width+' '+height);
    $rect.attr('width', width);
    $rect.attr('height', height);
    $rect.css({ 
      strokeDashoffset: totalPerimeter,
      strokeDasharray: totalPerimeter
    });
  });

$('#workThumbs > li ').hoverdir();

    // function headHover() {
    //     if($(document).width() > 600) {
    //        $('#workThumbs > li ').hoverdir();
    //        console.log('large');
    //        $('#workThumbs > li ').hoverdir();
    //     } else {
    //         $('#workThumbs > li ').unbind();
    //         console.log('small');
    //     }
    // }


$('a').on('click', function(event) {

    if (this.hash !== "") {  
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 480, function(){
        window.location.hash = hash;
      });
    } 
  });

$('.menu-icon').on('click', function(e) {
  $('.header__navigationBar').toggleClass('openMenu');

});


    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function() {
            $('#skills').addClass('initiateAnimation');  
           
        },
        offset: 350
    });



     var waypointWork = new Waypoint({
        element: document.getElementById('workThumbs'),
        handler: function() {
             setTimeout(function(){

            $('.workThumbs').removeClass('workThumbsOffScreen');
            $('.work').addClass('fadeIn');
            // $('.work').fadeIn(200);
            console.log('entered it');
              }, 100);


        },
        offset:'60%'
    });


// headHover();

// $(window).resize(function() {
//         headHover();
// });


};



$(function(){

 

$(window).load(function() {
    $(".load").hide();
    portfolio.init();
    
  });


});