$(function(){

// $('.project__word__overlay').hoverdir();
// 
// 
// 
// 




console.log('cmon');
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






$(' #workThumbs > li ').hoverdir();

$('.project__word__overlay').each( function() { $(this).hoverdir(); } );

$(window).load(function() {
		// Animate loader off screen
		$(".load").fadeOut("slow");;
	});


$('.binary').on('mouseenter',function(){

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
             preStringTyped: function() {
            	$('.binary__typed-5').addClass('hide');
            },
            
	 	});


	 	$('.checkWork').typed({
	 		strings: ["check out my work:"],
            typeSpeed: -12,
            startDelay: 2400,
            showCursor: false,
            preStringTyped: function() {
            	$('.checkWork').removeClass('hide').css('opacity','1');

            },
            //  preStringTyped: function() {
            // 	$('.binary__typed-5').removeClass('hide');
            // },
            
	 	});
	 	setTimeout(function(){ 
	 		$('.binaryName').addClass('nameColor');
	 		$('.checkWork').addClass('arrow');

	 		// $('body').fadeOut();
	 	}, 4000);
	 	
	 	$(this).unbind( "mouseenter" );
});
	 








 // $('.parallax').scrolly({bgParallax: true});

//----------------------------------------------------------- //
// check window scroll postion                                //
//------------------------------------------------------------//
   $(window).scroll(function() {
//----------------------------------------------------------- //
// opacity and auto animate flipping letters in ABOUT section //
//------------------------------------------------------------//

   // if($(window).scrollTop() + $(window).height() == $(document).height()) {
   //    $(".bio").css('opacity','1');
   //    setTimeout(function(){
   //     $(".flip").addClass('fliptored');
   //     // $("footer").show();
   //  }, 1400); 
   // }

//-------------------------------------------- //
//   on tablet or mobile                      //
//------------------------------------------ //

// if ($(window).width() <= 825) {  
//         //hide the mobile menu if user forget to close it
//         if ($('.skills').isOnScreen(.1, .1)){
//             console.log('works-wrapper');
//             $(".burger").removeClass("on");
//             $(".links").hide();
//         }
// }




//----------------------------------------------------------- //
// flip RED LETTERS back on scroll up 300px                   //       //
//------------------------------------------------------------//

   // if($(window).scrollTop() + $(window).height() < $(document).height() - 300) {
   //     $(".flip").removeClass('fliptored');
   // }

//----------------------------------------------------------- //
// fade out BIO section on scroll up 600px                    //        //
//------------------------------------------------------------// 

   //      if($(window).scrollTop() + $(window).height() < $(document).height() - 600) {
   // $(".bio").css('opacity','0');
   //  }

  });  // END WINDOW SCROLL FUNCTION

//----------------------------------------------------------- //
// ANIMATE HEADER set classes and adjust CSS                  //        //
//------------------------------------------------------------// 

var $clydeCodes = $("h1"),
    $subtitle = $('.subtitle'),
    $hero = $(".hero");

// $clydeCodes.css('opacity', '0');
//     setTimeout(function() {
//         $clydeCodes.css('opacity',1).addClass('webdevsubtitle');
//     }, 800);
    // setTimeout(function() {
    //     $hero.addClass('sticky').fadeIn(1000);
    //     $subtitle.css('color', '#fff');
    // }, 5000);

//--------------------------------------------------------------------------------- //
//  BURGER -click on, move page, prevent overlap and conflict with scroll collapse  //
//---------------------------------------------------------------------------------// 

//         $burger = $(".burger");
//         $links = $(".links");
//         $allinks=$(".allinks");

//         $burger.click(function() {
//             $("html, body").animate({ scrollTop: 0 }, 200);
//             setTimeout(function(){
//                 $burger.toggleClass('on');
//                 $links.slideToggle(1);
//              }, 201);
//         });

//         $(window).resize(function() {
//             if ($(this).width() > 825) {
//                 $burger.hide().removeClass('on');
//                 $allinks.show();
//                 $links.show();
//             } else {
//                 $burger.show();
//                 $links.hide();
               
//             }
//         });

// $.fn.isOnScreen = function(x, y){
    
//     if(x == null || typeof x == 'undefined') x = 1;
//     if(y == null || typeof y == 'undefined') y = 1;
    
//     var win = $(window);
    
//     var viewport = {
//         top : win.scrollTop(),
//         left : win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
    
//     var height = this.outerHeight();
//     var width = this.outerWidth();
 
//     if(!width || !height){
//         return false;
//     }
    
//     var bounds = this.offset();
//     bounds.right = bounds.left + width;
//     bounds.bottom = bounds.top + height;
    
//     var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
//     if(!visible){
//         return false;   
//     }
    
//     var deltas = {
//         top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
//         bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
//         left : Math.min(1, ( bounds.right - viewport.left ) / width),
//         right : Math.min(1, ( viewport.right - bounds.left ) / width)
//     };
    
//     return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    
// };

$('a').on('click', function(event) {

    if (this.hash !== "") {  
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });






    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function() {
            $('#skills').addClass('initiateAnimation');
            // alert('hey');
            // $('.circles__box--counter1').animateNumber({

            //     number: 32,
            //     easing: 'easeInQuad'
            // }, 2200);

            // $('.circles__box--counter2').animateNumber({

            //     number: 432,
            //     easing: 'easeInQuad'
            // }, 2000);

            // $('.circles__box--counter3').animateNumber({
            //     number: 537,
            //     easing: 'easeInQuad'
            // }, 1700);

            // $('.circles__box--counter4').animateNumber({
            //     number: 2140,
            //     easing: 'easeInQuad'
            // }, 2000);

            // $('.circles__box--counter5').animateNumber({
            //     number: 6540,
            //     easing: 'easeInQuad'
            // }, 2200);


        },

        offset: 350

    });





















});