<?php get_header();  ?>

<div class="main">

<section class="binary">
  
  <div class="binary__typedContainer">

  <span class="binary__typed binary__typed-1 hide"></span>
  <br>

  <span class="binary__typed binary__typed-2 hide"></span>
   <br>
  <span class="binary__typed binary__typed-3 hide"></span>
   <br>

  <span class="binary__typed binary__typed-4 hide"></span>
   <br>
   <span class="binary__typed binary__typed-5 hide"></span>

    <div>
    <a class="checkWork hide" href="#work"></a>
    </div>

</div>


<img class="binary__back" src="/portfolio/wp-content/themes/wordpress_starter_theme/images/binary2.png" alt="">

<div class="binary__image">
<img class="binary__imagex" src="/portfolio/wp-content/themes/wordpress_starter_theme/images/binary2.png" alt="">

</div>


</section>


<section class="work" id="work">


<?php
if( have_rows('work') ):
    while ( have_rows('work') ) : the_row();


$rows = get_field('work' ); // get all the rows

    endwhile;
else :
endif;
?>











                <ul id="workThumbs" class="workThumbs workThumbsOffScreen">




                    <li class="wordBox" data-hide="<?php echo $rows[0]['show']; ?>">
      
                       <a class="disabled" href="http://radioactiveblood.com">

   
    <h2> <?php echo $rows[0]['title']; ?> </h2>
    <h3> <?php echo $rows[0]['subtitle']; ?>  </h3>
    <p><?php echo $rows[0]['description']; ?></p>
    <aside class="iconBox">
    <i class="devicon-javascript-plain"></i>
    <i class="devicon-jquery-plain-wordmark"></i>
    <i class="devicon-sass-original"></i>
    <i class="fa fa-mobile icon"></i>
    </aside>
   <!--    </section>            
         </aside>  -->
                            <div class="clyde"><span></span></div>
             
                        </a>

                    </li>
                    <li data-hide="<?php echo $rows[0]['show']; ?>">
                        <a class="imageLink" href="<?php echo $rows[0]['link']; ?>">

<img src="<?php echo $rows[0]['project_image']['url']; ?>" alt="<?php echo $image['alt']; ?>" />



                           <!--  <img src="/portfolio/wp-content/themes/wordpress_starter_theme/images/marvel.jpg" /> -->
                            <div class="clyde"><button type="button" class="btn btn-svg">
  <svg class="btn_svg" version="1.1" viewBox="0 0 30 20" preserveAspectRatio="none">
    <rect class="btn_svg_shape" width="30" height="20"/>
  </svg>
  <span>VIEW LIVE</span>
</button></div>
                        </a>
                    </li>





                  <li data-hide="<?php echo $rows[1]['show']; ?>">
                        <a  class="imageLink" href="<?php echo $rows[1]['link']; ?>">

<img src="<?php echo $rows[1]['project_image']['url']; ?>" alt="<?php echo $image['alt']; ?>" />


                            <!-- <img src="/portfolio/wp-content/themes/wordpress_starter_theme/images/preach.jpg" /> -->
                            <div class="clyde"><button type="button" class="btn btn-svg">
  <svg class="btn_svg" version="1.1" viewBox="0 0 30 20" preserveAspectRatio="none">
    <rect class="btn_svg_shape" width="30" height="20"/>
  </svg>
  <span>VIEW LIVE</span>
</button></div>
                        </a>
                    </li>
                    <li class="wordBox" data-hide="<?php echo $rows[1]['show']; ?>">
                        <a  class="disabled" href="http://clyde.codes/preach">
    <h2> <?php echo $rows[1]['title']; ?> </h2>
    <h3> <?php echo $rows[1]['subtitle']; ?> </h3>
    <p><?php echo $rows[1]['description']; ?></p>
    <aside class="iconBox">
    <i class="devicon-php-plain"></i>
    <i class="devicon-wordpress-plain-wordmark"></i>
      <i class="devicon-git-plain-wordmark"></i>
      <i class="devicon-github-plain-wordmark"></i>
      <i class="fa fa-mobile icon"></i>
      </aside>
                            <div class="clyde"><span></span></div>
                        </a>
                    </li data-hide="<?php echo $rows[2]['show']; ?>">
                    


 <li class="wordBox" data-hide="<?php echo $rows[2]['show']; ?>">
                        <a  class="disabled" href="http://clyde.codes/krafty">
     <h2> <?php echo $rows[2]['title']; ?> </h2>
    <h3> <?php echo $rows[2]['subtitle']; ?> </h3>
    <p><?php echo $rows[2]['description']; ?></p>
    <aside class="iconBox">
    <i class="devicon-html5-plain-wordmark"></i>
    <i class="devicon-javascript-plain"></i>
    <i class="devicon-sass-original"></i>
    <i class="devicon-gulp-plain"></i>
    <i class="fa fa-mobile icon"></i>
    </aside>
                            <div class="clyde"><span></span></div>
                        </a>
                    </li>
                    <li data-hide="<?php echo $rows[2]['show']; ?>">
                        <a  class="imageLink" href="<?php echo $rows[2]['link']; ?>">

<img src="<?php echo $rows[2]['project_image']['url']; ?>" alt="<?php echo $image['alt']; ?>" />


                           <!--  <img src="/portfolio/wp-content/themes/wordpress_starter_theme/images/krafty.jpg" /> -->
                            <div class="clyde">

                            
                            <button type="button" class="btn btn-svg">
  <svg class="btn_svg" version="1.1" viewBox="0 0 30 20" preserveAspectRatio="none">
    <rect class="btn_svg_shape" width="30" height="20"/>
  </svg>
  <span>VIEW LIVE</span>
</button></div>
                        </a>
                    </li>



<li data-hide="<?php echo $rows[3]['show']; ?>">
                        <a class="imageLink" href="<?php echo $rows[3]['link']; ?>">
                           
<img src="<?php echo $rows[3]['project_image']['url']; ?>" alt="<?php echo $image['alt']; ?>" />


                            <!-- <img src="/portfolio/wp-content/themes/wordpress_starter_theme/images/pitch.jpg" /> -->
                            <div class="clyde">


                            <button type="button" class="btn btn-svg">
  <svg class="btn_svg" version="1.1" viewBox="0 0 30 20" preserveAspectRatio="none">
    <rect class="btn_svg_shape" width="30" height="20"/>
  </svg>
  <span>VIEW LIVE</span>
</button>



                            </div>
                        </a>
                    </li>
                    <li class="wordBox" data-hide="<?php echo $rows[3]['show']; ?>">
                        <a  class="disabled" href="http://clyde.codes/pitch">
     <h2> <?php echo $rows[3]['title']; ?> </h2>
    <h3><?php echo $rows[3]['subtitle']; ?></h3>
    <p><?php echo $rows[3]['description']; ?></p>
    <aside class="iconBox">
    <i class="devicon-html5-plain-wordmark"></i>
    <i class="devicon-css3-plain-wordmark"></i>
    <i class="devicon-javascript-plain"></i>
    <i class="devicon-jquery-plain-wordmark"></i> <i class="fa fa-mobile icon"></i>
    </aside>
                            <div class="clyde"><span></span></div>
                        </a>
                    </li>
  


<li class="wordBox" data-hide="<?php echo $rows[4]['show']; ?>">
                        <a  class="disabled" href="http://clyde.codes/krafty">
     <h2> <?php echo $rows[4]['title']; ?> </h2>
    <h3> <?php echo $rows[4]['subtitle']; ?> </h3>
    <p><?php echo $rows[4]['description']; ?></p>
    <aside class="iconBox">
    <i class="devicon-html5-plain-wordmark"></i>
    <i class="devicon-javascript-plain"></i>
    <i class="devicon-sass-original"></i>
    <i class="devicon-gulp-plain"></i>
    <i class="fa fa-mobile icon"></i>
    </aside>
                            <div class="clyde"><span></span></div>
                        </a>
                    </li>
                    <li data-hide="<?php echo $rows[4]['show']; ?>">
                        <a  class="imageLink" href="<?php echo $rows[4]['link']; ?>">

<img src="<?php echo $rows[4]['project_image']['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                            <div class="clyde">
                            <button type="button" class="btn btn-svg">
  <svg class="btn_svg" version="1.1" viewBox="0 0 30 20" preserveAspectRatio="none">
    <rect class="btn_svg_shape" width="30" height="20"/>
  </svg>
  <span>VIEW LIVE</span>
</button></div>
                        </a>
                    </li>





</ul>



</section>
 
 <section class="skills" id="skills">
   <div class="skills__wrapper">
 
<div class="skills__box">

 
<div class="skills__flexItem">
  

<ul class="skills__list">

  
  <li>PHP</li>
  <li>CSS3</li>
  <li>Sass</li>
  <li>HTML5</li>
  <li>React</li>
   <li>AJAX API</li>
   <li>jQuery</li>

  
  <li>JavaScript</li>  
  <li>Responsive design</li>
  
</ul>
</div>  

<h2><i class="fa fa-plus" aria-hidden="true"></i></h2>

<div class="skills__flexItem">

<ul class="tools__list">
  
 
 

 
 
  
  <li>Git</li>
  <li>Gulp</li>
  <li>Grunt</li>
  <li>GitHub</li>
  <li>Sketch</li>
  <li>Terminal</li>
  <li>Bootstrap</li>
  <li>WordPress</li>
  <li class="tools__listItem--padding" >Sublime Text3</li>

  
 
</ul>
</div>  





</div>
</div>
 </section>


<section class="contact" id="contact">
  


<div class="contactBox clearfix">

<div class="contactBoxGreet">
  <h2>Contact me</h2>

  <p><?php the_field('contact_form_paragraph' ); ?>
<a href="mailto:hello@cylde.codes?Subject=Hello%20Clyde" target="_top">hello[@]clyde.codes</a>
  </p>
</div>


<div class="contactBoxForm">
      <?php // Start the loop ?>
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

       <!--  <h2><?php the_title(); ?></h2> -->
        <?php the_content(); ?>

      <?php endwhile; // end the loop?>
</div>
</div>
    <!-- </div> /,content -->

   <!--  <?php get_sidebar(); ?> -->
</section>

  <!-- </div> /.container -->
</div> <!-- /.main -->



<div id="typed-strings1">
    <p><?php the_field('typed1'); ?></p>
</div>
<div id="typed-strings2">
    <p><?php the_field('typed2'); ?></p>
</div>
<div id="typed-strings3">
    <p><?php the_field('typed3'); ?></p>
</div>
<div id="typed-strings4">
    <p><?php the_field('typed4'); ?></p>
</div>
<div id="typed-strings5">
    <p><?php the_field('typed5'); ?></p>
</div>
<div id="typed-strings6">
    <p><?php the_field('typed6'); ?></p>
</div>




<?php get_footer(); ?>