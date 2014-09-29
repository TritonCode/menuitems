<?php

$site = array(
    'name' => 'menuitems',
    'css' => array(
        'font-awesome',
        'owlcarousel2',
        'designer',
        'normalize',
    ),
    'js' => array(
        'jquery',
        'imagesloaded',
        'skrollr',
        'skrollr_init',
        'masonry',
        'timeline',
        'menuitem',
        'pulsate',
        'textfill',
        'scrollTo',
        'google-code-prettify',
		'google-code-prettify-run'
    ),
    'company' => array(
        'name' => 'Menuitems',
        'logo' => '',
        'address' => '',
        'email' => 'patrick.geyer1@gmail.com',
        'copyright' => 'Copyright Chrome Value © 2014. All rights reserved.'
    ),
    'title' => 'Menuitems',
    'header' => array(
        'search' => false,
        'menu' => array(
            array('name' => 'Home', 'href' => ''),
            array('name' => 'Demo', 'href' => '', 'attr' => array(array('name' => 'data-mi-scrollTo', 'value' => 'demo'))),
            array('name' => 'Download', 'href' => 'https://github.com/PatrickGeyer/timeline/zipball/0.0.5', 'attr' => array(array('name' => 'download', 'value' => 'timeline'))),
            array('name' => 'Docs', 'href' => '', 'attr' => array(array('name' => 'data-mi-scrollTo', 'value' => 'docs'))),
        ),
        'logo' => false,
    ),
    "page" => array(
        "title" => "A refreshing approach to navigation.",
        "summary" => "Taking the concept of navigations by storm. Mobile & Desktop"
    ),
    'footer' => array(
        'social' => array(
            array(
                'class' => 'facebook',
                'href' => 'https://www.facebook.com/pages/Sweet-Revenge/118237008253327'
            ),
            array(
                'class' => 'twitter',
                'href' => 'https://twitter.com/SRevengeband'
            ),
            array(
                'class' => 'youtube',
                'href' => 'https://www.youtube.com/user/Humphrey793?feature=watch'
            ),
             array(
                'class' => 'soundcloud',
                'href' => 'https://soundcloud.com/sweet-revenge-1'
            ),
            array(
                'class' => 'instagram',
                'href' => 'http://instagram.com/sweetrevenge_official'
            ),
             array(
                'class' => 'google-plus',
                'href' => 'https://plus.google.com/108436869539861693487/about'
            ),
        ),
        'address' => false,
        'email' => true,
        'copyright' => true
    ),
    'info' => array()
);

require_once 'C:/xampp/htdocs/wwwroot/common/server/framework/init.php';
