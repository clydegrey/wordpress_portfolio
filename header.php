<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>


<!-- <div class="se-pre-con">tttttt</div> -->


<!-- <div id="load" class="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div> -->


<style>
  


.no-js #load { display: none;  }
.js #load { display: block; position: absolute; left: 100px; top: 0; }
.load {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
 
  /*font-size:20rem;*/
  z-index: 9999;
  /*background: url(images/loader-64x/Preloader_2.gif) center no-repeat #fff;*/
}




</style>



<header id="home">

  <div class="header__navigationBar">
    <h1>
      <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
        <?php bloginfo( 'name' ); ?>
      </a>
    </h1>

    <?php wp_nav_menu( array(
      'container' => false,
      'theme_location' => 'primary'
    )); ?>
 

<div class="menu-icon">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>



 </div>
</header><!--/.header-->

