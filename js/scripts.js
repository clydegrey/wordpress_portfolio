
var portfolio = {};


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

$('.project__word__overlay').each(function(){ 
  $(this).hoverdir(); 
});


setTimeout(function(){ 

		$('.binary').addClass('all-animate');

	 	$('.binary__typed-1').typed({
	 		
             stringsElement: $('#typed-strings1'),
            typeSpeed: -12,
            startDelay: 0,
            showCursor: false,            
             preStringTyped: function() {
            	$('.binary__typed-1').removeClass('hide');
            },
             callback: function() {
            	$('.binary__typed-1').addClass('hide');
            },

	 	});

	 	$('.binary__typed-2').typed({
	 		
             stringsElement: $('#typed-strings2'),
            typeSpeed: -12,
            startDelay: 400,
            showCursor: false,
            preStringTyped: function() {
            	$('.binary__typed-2').removeClass('hide');
            },
            callback: function() {
            	$('.binary__typed-2').addClass('hide');
            },

	 	});

	 	$('.binary__typed-3').typed({
	 		
             stringsElement: $('#typed-strings3'),
            typeSpeed: -12,
            startDelay: 1000,
            showCursor: false,
             preStringTyped: function() {
            	$('.binary__typed-3').removeClass('hide');
            },
             callback: function() {
            	$('.binary__typed-3').addClass('hide');
            },

	 	});

	 	$('.binary__typed-4').typed({
	 		
             stringsElement: $('#typed-strings4'),
            typeSpeed: -12,
            startDelay: 1400,
            showCursor: false,
             preStringTyped: function() {
            	$('.binary__typed-4').removeClass('hide');
            },
             callback: function() {
            	$('.binary__typed-4').addClass('hide');
            },

	 	});

	 	$('.binary__typed-5').typed({
	 	
             stringsElement: $('#typed-strings5'),
            typeSpeed: -12,
            startDelay: 2000,
            showCursor: false,
            preStringTyped: function() {
            	$('.binary__typed-4').removeClass('hide');
            },
             callback: function() {
            	$('.binary__typed-4').addClass('hide');
            },
            
	 	});


	 	$('.checkWork').typed({
	 
             stringsElement: $('#typed-strings6'),
            typeSpeed: -12,
            startDelay: 3000,
            showCursor: false,
            backDelay:4000,
            preStringTyped: function() {
            	$('.checkWork').removeClass('hide');
            },
          
	 	});
	 	setTimeout(function(){ 
	 		$('.binary__typed').addClass('white');
	 		$('.checkWork').addClass('arrow');
	 	}, 4000);
}, 700);


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
              }, 200);


        },
        offset:'60%'
    });


};




$(function(){

 

$(window).load(function() {
    $(".load").hide();
    portfolio.init();
    
  });



});