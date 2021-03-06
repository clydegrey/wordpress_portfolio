<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" 
      type="image/png" 
      href="./favicons.ico/favicon.ico">

  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body id="home" <?php body_class(); ?>>


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
  z-index: 9999;
}




</style>



<header>

  <div class="header__navigationBar">
    <h1>
      
      <a href="http://clyde.codes" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
       <!--  <?php bloginfo( 'name' ); ?> -->
       Clyde<span>Grey</span>
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

