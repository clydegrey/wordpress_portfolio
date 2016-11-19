
var portfolio = {};


// scroll to top of page on unload so animation of work section can repeat
$(window).on('unload', function() {
   $(window).scrollTop(0);
});



// parallax of hero image
$(".parallax-window").parallax({
  y: "-34%"
});



// added data button to wordpress dashboard so I can toggle elements on and off
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


// smooth scroll to links

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