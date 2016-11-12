
var portfolio = {};


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
	 		strings: ["hello there, my name is <span class='binaryName'>clyde grey</span>"],
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
	 		strings: ["i am a front-end web developer,"],
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
	 		strings: ["living and working in toronto, canada"],
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
	 		strings: ["i love making cool interactive sites"],
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
	 		strings: ["and writing dry semantic code"],
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
	 		strings: ["check out my work:"],
            typeSpeed: -12,
            startDelay: 2400,
            showCursor: false,
            preStringTyped: function() {
            	$('.checkWork').removeClass('hide');
            },
          
	 	});
	 	setTimeout(function(){ 
	 		$('.binaryName').addClass('nameColor');
	 		$('.checkWork').addClass('arrow');
	 	}, 4000);
}, 700);


$('a').on('click', function(event) {

    if (this.hash !== "") {  
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    } 
  });

    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function() {
            $('#skills').addClass('initiateAnimation');
        },
        offset: 350
    });


};



$(function(){

  

$(window).load(function() {
    $(".load").fadeOut(1);
    portfolio.init();
    
  });



});